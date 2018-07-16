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


    private updateDoc$ = new Subject<[object]>();
    private updateDoc: object[];

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

    public updateDocument$(file, document, documentoService): Observable<object[]> {
        this.updateFile(file, document, documentoService, this);
        return this.updateDoc$.asObservable();
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

    updateFile(file, documento, documentoService, nuxeoservice) {
        console.info(this.updateDoc);
        if (file.file !== undefined) {
            const nuxeoBlob = new Nuxeo.Blob({ content: file.file });
            documentoService.get('documento?query=Id:' + documento)
                .subscribe(res => {
                    if (res !== null) {
                        const documento_temp = <any>res[0];
                        console.info(res);
                        console.info(this.documentos);
                        NuxeoService.nuxeo.connect()
                        NuxeoService.nuxeo.batchUpload()
                            .upload(nuxeoBlob)
                            .then(function (response) {
                                NuxeoService.nuxeo.operation('Blob.AttachOnDocument')
                                    .params({
                                        type: documento_temp.TipoDocumento.TipoDocumentoNuxeo,
                                        name: documento_temp.Nombre,
                                        properties: 'dc:title=' + file.nombre,
                                    })
                                    .param('document', documento_temp.Enlace)
                                    .input(response.blob)
                                    .execute()
                                    .then(function (respuesta) {
                                        nuxeoservice.updateDoc.push(respuesta);
                                        nuxeoservice.updateDoc$.next(nuxeoservice.updateDoc);
                                    });
                            });
                    }
                });
        } else {
            nuxeoservice.updateDoc.push(false);
            nuxeoservice.updateDoc$.next(nuxeoservice.updateDoc);
        }
    };

    getFile(Ids, documentoService, nuxeoservice) {
        console.info(this.blobDocument);
        Ids.forEach(Id => {
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
                                            blob.blob()
                                                .then(function (responseblob) {
                                                    const url = URL.createObjectURL(responseblob)
                                                    nuxeoservice.blobDocument.push(url);
                                                    if (nuxeoservice.blobDocument.lenght === Ids.lenght) {
                                                        nuxeoservice.blobDocument$.next(nuxeoservice.blobDocument);
                                                    }
                                                });
                                        })
                                        .catch(function (response2) {
                                        });
                                })
                                .catch(function (response) {
                                });
                        }
                    }
                });
        });
    }
}
