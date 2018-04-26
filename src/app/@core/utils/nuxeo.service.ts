import * as Nuxeo from 'nuxeo';
import { Injectable } from '@angular/core';
import { Config } from './../../app-config'


@Injectable()
export class NuxeoService {
    static nuxeo: Nuxeo;
    constructor() {

    }
    static guardar(Files): any {
        NuxeoService.nuxeo = new Nuxeo({
            baseURL: Config.LOCAL.NUXEO.PATH,
            auth: Config.LOCAL.NUXEO.AUTH,
        });
        NuxeoService.nuxeo.connect().then(function (client) {
            Files.forEach(element => {
                NuxeoService.nuxeo.operation('Document.Create')
                    .params({
                        type: 'File',
                        name: element.nombre,
                        properties: 'dc:title=' + element.nombre,
                    })
                    .input('/default-domain/workspaces/Pruebas Planestic')
                    .execute()
                    .then(function (doc) {
                        const nuxeoBlob = new Nuxeo.Blob({ content: element.file });
                        NuxeoService.nuxeo.batchUpload()
                            .upload(nuxeoBlob)
                            .then(function () {
                                element.uuid = doc.uuid;
                            })
                    })
                    .catch(function (error) {
                        console.info(error);
                        throw error;
                    });
            })
            return Files;
        });
    }
}
