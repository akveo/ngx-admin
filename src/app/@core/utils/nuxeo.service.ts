import * as Nuxeo from 'nuxeo';
import { Injectable } from '@angular/core';
import { GENERAL } from './../../app-config';


@Injectable()
export class NuxeoService {
    static nuxeo: Nuxeo;
    constructor() {

    }
    static guardar(Files): any {
        NuxeoService.nuxeo = new Nuxeo({
            baseURL: GENERAL.ENTORNO.NUXEO.PATH,
            auth: {
                method: 'basic',
                username: 'Administrator',
                password: 'S1st3m4s04S=Fr331P4',
            },
        });
        NuxeoService.nuxeo.connect().then(function (client) {
            Files.forEach(element => {
                NuxeoService.nuxeo.operation('Document.Create')
                    .params({
                        type: 'Picture',
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
                                element.uuid = doc.uid;
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
