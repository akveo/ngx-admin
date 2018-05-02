import * as Nuxeo from 'nuxeo';
import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { GENERAL } from './../../../app-config'


@Component({
    selector: 'ngx-nuxeo',
    template: ``,
})
export class NuxeoComponent implements OnChanges {
    static nuxeo: any;
    @Input('files') files: any;
    @Output('saveApi') static saveApi: EventEmitter<any> = new EventEmitter();

    ngOnChanges(changes) {
        console.info(changes);
        if (changes.files !== undefined || changes.files !== []) {
            if (changes.files.currentValue !== undefined) {
                this.files = changes.files.currentValue;
                NuxeoComponent.guardar(this.files);
            }
        }
    }


    static guardar(Files): any {
        NuxeoComponent.nuxeo = new Nuxeo({
            baseURL: GENERAL.ENTORNO.NUXEO.PATH,
            auth: GENERAL.ENTORNO.NUXEO.AUTH,
        });
        NuxeoComponent.nuxeo.connect().then(function (client) {
            Files.forEach(element => {
                NuxeoComponent.nuxeo.operation('Document.Create')
                    .params({
                        type: 'File',
                        name: element.nombre,
                        properties: 'dc:title=' + element.nombre,
                    })
                    .input('/default-domain/workspaces/Pruebas Planestic')
                    .execute()
                    .then(function (doc) {
                        const nuxeoBlob = new Nuxeo.Blob({ content: element.file });
                        NuxeoComponent.nuxeo.batchUpload()
                            .upload(nuxeoBlob)
                            .then(function () {
                                console.info(doc);
                                element.uuid = doc.uid;
                                NuxeoComponent.saveApi.emit(element);
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
