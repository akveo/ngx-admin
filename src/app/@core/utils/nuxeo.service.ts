import * as Nuxeo from 'nuxeo';
import { Injectable } from '@angular/core';
import { GENERAL } from './../../app-config';
import { Observable } from 'rxjs/Observable';
import { Documento } from './../data/models/documento'
import { TipoDocumento } from './../data/models/tipo_documento'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NuxeoService {
    static nuxeo: Nuxeo
    private documentos$ = new Subject<Documento[]>();
    private documentos: Documento[];

    constructor() {
        this.documentos = [];
    }

    public getDocumentos$(file, documentoService): Observable<Documento[]> {
        this.saveFiles(file, documentoService, this);
        return this.documentos$.asObservable();
    }

    saveFiles(files, documentoService, nuxeoservice) {
        this.documentos$.next(this.documentos);
        NuxeoService.nuxeo = new Nuxeo({
            baseURL: GENERAL.ENTORNO.NUXEO.PATH,
            auth: {
                method: 'basic',
                username: 'Administrator',
                password: 'S1st3m4s04S=Fr331P4',
            },
        });
        NuxeoService.nuxeo.connect()
            .then(function (client) {
                files.forEach(file => {
                    documentoService.get('tipo_documento/' + file.IdDocumento)
                        .subscribe(res => {
                            if (res !== null) {
                                const tipoDocumento = <TipoDocumento>res;
                                NuxeoService.nuxeo.operation('Document.Create')
                                    .params({
                                        type: tipoDocumento.Extension,
                                        name: file.nombre,
                                        properties: 'dc:title=' + file.nombre,
                                    })
                                    .input(tipoDocumento.Workspace)
                                    .execute()
                                    .then(function (doc) {
                                        const nuxeoBlob = new Nuxeo.Blob({ content: file.file });
                                        NuxeoService.nuxeo.batchUpload()
                                            .upload(nuxeoBlob)
                                            .then(function (response) {
                                                file.uid = doc.uid
                                                NuxeoService.nuxeo.operation('Blob.AttachOnDocument')
                                                    .param('document', doc.uid)
                                                    .input(response.blob)
                                                    .execute()
                                                    .then(function (respuesta) {
                                                        const documentoPost = new Documento;
                                                        documentoPost.Enlace = file.uid;
                                                        documentoPost.Nombre = file.nombre;
                                                        documentoPost.TipoDocumento = tipoDocumento;
                                                        documentoService.post('documento', documentoPost)
                                                            .subscribe(resuestaPost => {
                                                                nuxeoservice.documentos.push(resuestaPost);
                                                                this.documentos$.next(nuxeoservice.documentos);
                                                            })

                                                    });
                                            })
                                            .catch(function (error) {
                                                return error;
                                            });
                                    })
                                    .catch(function (error) {
                                        return error;
                                    })
                            }
                        });
                });
            });
    }


    static cargar(docid) {
        const promise = new Promise(function (resolve, reject) {
            this.nuxeo = new Nuxeo({
                baseURL: GENERAL.ENTORNO.NUXEO.PATH,
                auth: {
                    method: 'basic',
                    username: 'Administrator',
                    password: 'S1st3m4s04S=Fr331P4',
                },
            });
            if (docid != null) {
                this.nuxeo.header('X-NXDocumentProperties', '*');
                this.nuxeo.request('/id/' + docid)
                    .get()
                    .then(function (response) {
                        response.fetchBlob()
                            .then(function (blob: any) {
                                resolve(blob.url);
                            })
                            .catch(function (response2) {
                                reject('Error: ' + response2);
                            });
                    })
                    .catch(function (response) {
                        reject('Error: ' + response);
                    });
            };
        });
        return promise;
    }
}
