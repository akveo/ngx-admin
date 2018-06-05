import * as Nuxeo from 'nuxeo';
import { Injectable } from '@angular/core';
import { GENERAL } from './../../app-config';


@Injectable()
export class NuxeoService {
    static nuxeo: Nuxeo

    constructor() {
    }

    static guardar(Files, documentoService) {
        const promise = new Promise(function (resolve, reject) {
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
                    Files.forEach(element => {
                        documentoService.get('tipo_documento/' + element.IdDocumento)
                            .subscribe(res => {
                                if (res !== null) {
                                    console.info(res);
                                    NuxeoService.nuxeo.operation('Document.Create')
                                        .params({
                                            type: res.Extension,
                                            name: element.nombre,
                                            properties: 'dc:title=' + element.nombre,
                                        })
                                        .input(res.Workspace)
                                        .execute()
                                        .then(function (doc) {
                                            const nuxeoBlob = new Nuxeo.Blob({ content: element.file });
                                            NuxeoService.nuxeo.batchUpload()
                                                .upload(nuxeoBlob)
                                                .then(function (response) {
                                                    element.uid = doc.uid
                                                    return NuxeoService.nuxeo.operation('Blob.AttachOnDocument')
                                                        .param('document', doc.uid)
                                                        .input(response.blob)
                                                        .execute()
                                                        .then(function (respuesta) {
                                                            const documentoPost = {
                                                                Enlace: doc.uid,
                                                                Nombre: element.nombre,
                                                                TipoDocumento: { Id: element.IdDocumento },
                                                            }
                                                            documentoService.post('documento', documentoPost)
                                                                .subscribe(respuestaPost => {
                                                                    console.info(respuestaPost)
                                                                    resolve(respuestaPost);
                                                                })
                                                        });
                                                })
                                                .catch(function (error) {
                                                    reject('Error: ' + error);
                                                    throw error;
                                                });
                                        })
                                        .catch(function (error) {
                                            reject('Error: ' + error);
                                            throw error;
                                        })
                                }
                            });
                    })
                });
        });
        return promise;
    }


    static cargar(docid, url) {
        const promise = new Promise(function (resolve, reject) {
            NuxeoService.nuxeo = new Nuxeo({
                baseURL: GENERAL.ENTORNO.NUXEO.PATH,
                auth: {
                    method: 'basic',
                    username: 'Administrator',
                    password: 'S1st3m4s04S=Fr331P4',
                },
            });
            let url = '';
            let error = null;
            if (docid != null) {
                NuxeoService.nuxeo.header('X-NXDocumentProperties', '*');
                NuxeoService.nuxeo.request('/id/' + docid)
                    .get()
                    .then(function (response) {
                        response.fetchBlob()
                            .then(function (blob) {
                                url = blob.url
                                resolve(blob);
                            })
                            .catch(function (response2) {
                                reject('Error: ' + response2);
                                throw error;
                            });
                    })
                    .catch(function (response) {
                        reject('Error: ' + response);
                        throw error;
                    });
            };
        });
        return promise;
    }
}
