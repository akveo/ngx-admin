import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'ngx-modal',
    template: `
  <form class="form" role="form" [formGroup]="form" (ngSubmit)="okClick()">
  <fieldset>
  <div class="modal-header">
      <span>{{ modalHeader }}</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="modal-body">
     <div class=" form-group" >
<input type="text" placeholder="Name" class="form-control"  [formControl]="form.controls['node']" [ngClass] = "{'form-control-danger': form.controls['node'].hasError('required') && form.controls['node'].touched}"/>
<div style="color:red" class="m-1 form-control-feedback" *ngIf="form.controls['node'].hasError('required') && form.controls['node'].touched">Name is required</div>
   </div>

    </div>
    <div class="modal-footer">
      <button  type="submit" [disabled]="!form.valid" class="btn btn-md btn-primary" >Save</button>
    </div>
    </fieldset>
</form>
  `,
})
export class InputComponent implements OnInit {

    modalHeader: string;
    modalOperation: number;
    modalNode: any;
    modalTree: any;
    modalTreeData: any;
    public form: FormGroup;


    constructor(private activeModal: NgbActiveModal,
        private fb: FormBuilder,
        private toastr: ToastrService,
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
        this.toastr.success('Add Successfully');
        this.activeModal.close();
    }
    addCategory(node) {
        node.data.children.push({ name: this.form.value.node, children: [] });
        this.toastr.success('Add Successfully');
        this.activeModal.close();
    }
    editNode(node) {
        node.data.name = this.form.value.node;
        this.toastr.success('Term updated to: ' + this.form.value.node);
        this.activeModal.close();
    }
}
