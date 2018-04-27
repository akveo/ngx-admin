import * as Nuxeo from 'nuxeo';
import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { general } from './../../../app-config'


@Component({
    selector: 'ngx-nuxeo',
    template: ``,
})
export class NuxeoComponent implements OnChanges {
    @Input('files') files: any;
    @Output('save') save: EventEmitter<any> = new EventEmitter();

    constructor(public nuxeo: Nuxeo) {
    }

    ngOnChanges(changes) {
        console.info(changes);
        if (changes.files !== undefined || changes.files !== []) {
            if (changes.files.currentValue !== undefined) {
                this.files = changes.files.currentValue;
                this.guardar(this.files);
            }
        }
    }

    traer(Files): any {
    }

    guardar(Files): any {
        this.nuxeo = new Nuxeo({
            baseURL: general.ENTORNO.NUXEO.PATH,
            auth: general.ENTORNO.NUXEO.AUTH,
        });
        this.nuxeo.connect().then(function (client) {
            Files.forEach(element => {
                console.info(client);
                this.nuxeo.operation('Document.Create')
                    .params({
                        type: 'File',
                        name: 'Foto_prueba',
                        properties: 'dc:title=' + 'Foto prueba',
                    })
                    .input('/default-domain/workspaces/Pruebas Planestic')
                    .execute()
                    .then(function (doc) {
                        const nuxeoBlob = new Nuxeo.Blob({ content: element.file });
                        this.nuxeo.batchUpload()
                            .upload(nuxeoBlob)
                            .then(function () {
                                element.uuid = doc.uuid;
                                this.save.emit(element);
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
