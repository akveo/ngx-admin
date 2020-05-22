import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { NbWindowService } from '@nebular/theme';

import { SmartTableData } from '../../@core/data/smart-table';
import { ServiceAgreementList } from '../../@core/data/service-agreement';
import { ServiceAgreementService } from './sa.service';
import { ServiceAgreementDetailComponent } from './service-agreement-detail/service-agreement-detail.component';

@Component({
  selector: 'ngx-sa',
  templateUrl: './sa.component.html',
  styleUrls: ['./sa.component.scss'],
})
export class ServiceAgreementComponent implements OnInit{

  settings = {
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
      customerBusiness: {
        title: 'Business',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      }
    },
  };

  source: ServiceAgreementList[] = [];

  constructor(private service: ServiceAgreementService, private windowService: NbWindowService) {
    console.log('test', this.source);
  }

  ngOnInit(): void {
    this.service.getServiceAgreement().subscribe((result) => {
      this.source = Object.assign([], result);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
    
  openWindowForm() {
    this.windowService.open(ServiceAgreementDetailComponent, { title: `Service Agreement Detail` });
  }
}
