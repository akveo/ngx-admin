import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NbAuthService } from '@nebular/auth';
import { ViewChild } from '@angular/core'
import { TreeComponent, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';

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
     <!-- <input type="number" placeholder="CNIC Number" class="form-control"/> -->
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

    @ViewChild(TreeComponent)
    private tree: TreeComponent;

    constructor(private activeModal: NgbActiveModal,
        private fb: FormBuilder,
        private toastr: ToastrService,
    ) { }

    ngOnInit() {
        this.form = this.fb.group({

            node: [null, Validators.compose([Validators.required])],

        });
        if (this.modalOperation == 1) {
            this.form.patchValue({
                node : this.modalNode.data.name,
            });
        }
        console.log('node model : ' + this.modalNode);
        console.log('tree model : ' + this.modalTree.treeModel);
    }
    // private cObj: CustomersListComponent =
    //  new CustomersListComponent(null , null , null , null , null , null , null , this.authService ) ;
    closeModal() {
        this.activeModal.close();
    }
    okClick() {
        switch (this.modalOperation) {
            case 1:

                this.editNode(this.modalNode, this.modalTree)
                break;
            case 2:
                this.addNode(this.modalNode, this.modalTree)
                break;
            case 3:
                this.addCategory(this.modalNode, this.modalTree)
                break;
            default: alert('Invalid Action');
        }
        // const inputs = document.getElementsByClassName('actionPane');
        // for (let i = 0; i < inputs.length; i++) {
        //   // inputs[i].style.visibility = 'hidden';
        // }
        // const wrapper = document.getElementsByClassName('node-content-wrapper');
        // for (let i = 0; i < wrapper.length; i++) {
        //   // wrapper[i].style.height = '20px';
        // }
    }
    addNode(node, tree) {
        node.data.children.push({ name: this.form.value.node });
        this.toastr.success('Add Successfully');
        this.activeModal.close();
    }
    addCategory(node, tree) {

        node.data.children.push({ name: this.form.value.node, children: [] });
        this.toastr.success('Add Successfully');
        this.activeModal.close();

    }

    editNode(node, tree) {
        node.data.name = this.form.value.node;
        this.toastr.success('Term updated to: ' + this.form.value.node);
        this.activeModal.close();

    }
    onSubmit() {

        //   //  console.log(this.form.valid);  // false
        //     if (this.form.value.node == this.modalUCnic) {
        //       this.customersService.deleteCustomer(this.modalU_ID)
        //         .subscribe(data1 => {
        //           this.toastr.success('Deleted Successfully');
        //           // this.customersListComponent.refresh();
        //           this.activeModal.close();
        //         },
        //       error => {
        //         this.toastr.error('Deletion Error');

        //       });
        //     }
        //     else {
        //       this.toastr.warning('Wrong CNIC number.');
        //     }
    }
}
