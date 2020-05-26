import { Component, OnInit } from '@angular/core';
import { BillingList } from '../../@core/data/billing';
import { BillingService } from './billing.service';
import { BillingDetailComponent } from './billing-detail/billing-detail.component';
import { NbWindowService } from '@nebular/theme';

@Component({
  selector: 'ngx-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss'],
})
export class BillingComponent implements OnInit {

  settings = {
    mode: 'inline',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      customerCode: {
        title: 'Partner Code',
        type: 'string',
      },
      customerFullname: {
        title: 'Partner Name',
        type: 'string',
      },
      nextBillTimeString: {
        title: 'Next Billing',
        type: 'string',
      },
    },
  };

  source: BillingList[] = [];

  constructor(private service: BillingService, private windowService: NbWindowService) {
  }

  ngOnInit(): void {
    this.initData();
  }
  initData(){
    this.service.getBilling().subscribe((result) => {
      this.source = Object.assign([], result);
      console.log('test', result);
    });
  }
  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData.status = 1;
      this.service.postBilling(event.newData).subscribe((value) => {
        this.initData();
      });
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.deleteBilling(event.data).subscribe((value) => {
        this.initData();
      });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  
  openWindowForm(event) {
    
    let temp = event.data.billTitle.toString()
    event.data.billTitle = temp
    console.log('data kirim', event.data)
    this.windowService.open(BillingDetailComponent, {
      title: 'Billing Detail',
      context: {
        data: event.data,
      },
    });
  }
}
