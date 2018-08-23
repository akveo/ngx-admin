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
    private documentos: object;

    private blobDocument$ = new Subject<[object]>();
    private blobDocument: object;

    private updateDoc$ = new Subject<[object]>();
    private updateDoc: object

    constructor() {
        this.documentos = {};
        this.blobDocument = {};
        this.updateDoc = {};
        console.info(this.blobDocument);
        console.info(this.updateDoc);

        NuxeoService.nuxeo = new Nuxeo({
            baseURL: GENERAL.ENTORNO.NUXEO.PATH,
            auth: {
                method: 'basic',
                username: 'campus_virtual',
                password: 'c4mpus',
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

    public updateDocument$(files, documentoService): Observable<object[]> {
        this.updateFile(files, documentoService, this);
        return this.updateDoc$.asObservable();
    }

    saveFiles(files, documentoService, nuxeoservice) {
        this.documentos = {};
        nuxeoservice.documentos = {};
        NuxeoService.nuxeo.connect()
            .then(function (client) {
                files.forEach(file => {
                    documentoService.get('tipo_documento/' + file.IdDocumento)
                        .subscribe(res => {
                            if (res !== null) {
                                const tipoDocumento = <TipoDocumento>res;
                                console.info(tipoDocumento);
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
                                                                nuxeoservice.documentos[file.key] = resuestaPost.Body;
                                                                nuxeoservice.documentos$.next(nuxeoservice.documentos);
                                                            })

                                                    });
                                            })
                                            .catch(function (error) {
                                                console.info(error);
                                                return error;
                                            });
                                    })
                                    .catch(function (error) {
                                        console.info(error);
                                        return error;
                                    })
                            }
                        });
                });
            });
    }

    updateFile(files, documentoService, nuxeoservice) {
        this.updateDoc = {};
        nuxeoservice.updateDoc = {};
        files.forEach(file => {
            if (file.file !== undefined) {
                const nuxeoBlob = new Nuxeo.Blob({ content: file.file });
                documentoService.get('documento?query=Id:' + file.documento)
                    .subscribe(res => {
                        if (res !== null) {
                            const documento_temp = <any>res[0];
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
                                            respuesta.blob()
                                                .then(function (responseblob) {
                                                    const url = URL.createObjectURL(responseblob);
                                                    const response_update = {
                                                        documento: documento_temp,
                                                        url: url,
                                                    };
                                                    nuxeoservice.updateDoc[file.key] = response_update;
                                                    nuxeoservice.updateDoc$.next(nuxeoservice.updateDoc);
                                                });
                                        });
                                });
                        }
                    });
            }
        });
    };

    getFile(files, documentoService, nuxeoservice) {
        this.blobDocument = {};
        nuxeoservice.blobDocument = {};
        files.forEach(file => {
            documentoService.get('documento/' + file.Id)
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
                                                    nuxeoservice.blobDocument[file.key] = url;
                                                    nuxeoservice.blobDocument$.next(nuxeoservice.blobDocument);
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
