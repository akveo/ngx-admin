import * as Nuxeo from 'nuxeo';
import { Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { Config } from './../../../app-config'


@Component({
    selector: 'ngx-nuxeo',
    template: ``,
})
export class NuxeoComponent implements OnChanges {
    nuxeo: Nuxeo;
    @Input('files') files: any;
    @Output('save') save: EventEmitter<any> = new EventEmitter();

    constructor() {

    }

    ngOnChanges(changes) {
        if (changes.files !== undefined || changes.files !== []) {
            if (changes.files.currentValue !== undefined) {
                this.files = changes.files.currentValue;
                this.guardar(this.files);
            }
        }
    }

    guardar(Files): any {
        this.nuxeo = new Nuxeo({
            baseURL: Config.LOCAL.NUXEO.PATH,
            auth: Config.LOCAL.NUXEO.AUTH,
        });
        this.nuxeo.connect().then(function (client) {
            Files.forEach(element => {
                this.nuxeo.operation('Document.Create')
                    .params({
                        type: 'File',
                        name: element.nombre,
                        properties: 'dc:title=' + element.nombre,
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
