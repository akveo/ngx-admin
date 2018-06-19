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

    private blobDocument$ = new Subject<[object]>();
    private blobDocument: object[];

    constructor() {
        this.documentos = [];
        this.blobDocument = [];
        NuxeoService.nuxeo = new Nuxeo({
            baseURL: GENERAL.ENTORNO.NUXEO.PATH,
            auth: {
                method: 'basic',
                username: 'Administrator',
                password: 'S1st3m4s04S=Fr331P4',
            },
        });
    }

    public getDocumentos$(file, documentoService): Observable<Documento[]> {
        this.saveFiles(file, documentoService, this);
        return this.documentos$.asObservable();
    }

    public getDocumentoById$(Id, documentoService): Observable<object[]> {
        this.getFile(Id, documentoService, this);
        return this.blobDocument$.asObservable();
    }

    saveFiles(files, documentoService, nuxeoservice) {
        console.info(this.documentos);
        NuxeoService.nuxeo.connect()
            .then(function (client) {
                files.forEach(file => {
                    documentoService.get('tipo_documento/' + file.IdDocumento)
                        .subscribe(res => {
                            if (res !== null) {
                                const tipoDocumento = <TipoDocumento>res;
                                NuxeoService.nuxeo.operation('Document.Create')
                                    .params({
                                        type: tipoDocumento.TipoDocumentoNuxeo,
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
                                                                if (nuxeoservice.documentos.lenght === files.lenght) {
                                                                    nuxeoservice.documentos$.next(nuxeoservice.documentos);
                                                                }
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

    getFile(Id, documentoService, nuxeoservice) {
        console.info(this.blobDocument);
        documentoService.get('documento/' + Id)
            .subscribe(res => {
                if (res !== null) {
                    if (res.Enlace != null) {
                        NuxeoService.nuxeo.header('X-NXDocumentProperties', '*');
                        NuxeoService.nuxeo.request('/id/' + res.Enlace)
                            .get()
                            .then(function (response) {
                                response.fetchBlob()
                                    .then(function (blob) {
                                        nuxeoservice.blobDocument.push(blob);
                                        nuxeoservice.blobDocument$.next(nuxeoservice.blobDocument);
                                    })
                                    .catch(function (response2) {
                                    });
                            })
                            .catch(function (response) {
                            });
                    }
                }
            });
    }
}
