import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'ngx-modal',
    templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {

    public form: FormGroup;
    modalHeader: string;
    modalOperation: number;
    modalNode: any;
    modalTree: any;
    modalTreeData: any;



    constructor(private activeModal: NgbActiveModal,
        private fb: FormBuilder,
    ) { }

    ngOnInit() {
        this.form = this.fb.group({
            node: [null, Validators.compose([Validators.required])],
        });
        if (this.modalOperation === 1) {
            this.form.patchValue({
                node: this.modalNode.data.name,
            });
        }
    }

    closeModal() {
        this.activeModal.close();
    }

    okClick() {
        switch (this.modalOperation) {
            case 1:
                this.editNode(this.modalNode)
                break;
            case 2:
                this.addNode(this.modalNode)
                break;
            case 3:
                this.addCategory(this.modalNode)
                break;
            default: alert('Invalid Action');
        }
    }

    addNode(node) {
        node.data.children.push({ name: this.form.value.node });
        this.activeModal.close();
    }

    addCategory(node) {
        node.data.children.push({ name: this.form.value.node, children: [] });
        this.activeModal.close();
    }

    editNode(node) {
        node.data.name = this.form.value.node;
        this.activeModal.close();
    }
}
