import * as Nuxeo from 'nuxeo';
import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { GENERAL } from './../../../app-config'


@Component({
    selector: 'ngx-nuxeo',
    template: ``,
})
export class NuxeoComponent implements OnChanges {
    nuxeo: any;
    @Input('files') files: any;
    @Output('saveApi') saveApi: EventEmitter<any> = new EventEmitter();

    guardar(Files, nuxeo, saveApi): any {
        nuxeo.connect()
            .then(function (client) {
                Files.forEach(element => {
                    nuxeo.operation('Document.Create')
                        .params({
                            type: 'Picture',
                            name: element.nombre,
                            properties: 'dc:title=' + element.nombre,
                        })
                        .input('/default-domain/workspaces/Pruebas Planestic')
                        .execute()
                        .then(function (doc) {
                            const nuxeoBlob = new Nuxeo.Blob({ content: element.file });
                            nuxeo.batchUpload()
                                .upload(nuxeoBlob)
                                .then(function (res) {
                                    element.uid = doc.uid
                                    saveApi.emit(element);
                                    return nuxeo.operation('Blob.AttachOnDocument')
                                        .param('document', doc.uid)
                                        .input(res.blob)
                                        .execute();
                                })
                                .catch(function (error) {
                                    console.info(error);
                                    throw error;
                                });
                        })
                        .catch(function (error) {
                            console.info(error);
                            throw error;
                        });
                })
            });
    }

    ngOnChanges(changes) {
        console.info(changes);
        if (changes.files !== undefined || changes.files !== []) {
            if (changes.files.currentValue !== undefined) {
                this.files = changes.files.currentValue;
                this.nuxeo = new Nuxeo({
                    baseURL: GENERAL.ENTORNO.NUXEO.PATH,
                    auth: {
                        method: 'basic',
                        username: 'Administrator',
                        password: 'S1st3m4s04S=Fr331P4',
                    },
                });
                this.guardar(this.files, this.nuxeo, this.saveApi);
            }
        }
    }
}
