import { Component, OnInit } from '@angular/core';
import { PartnerPriceService } from './partner-price.service';
import { PartnerPriceDetailComponent } from './partner-price-detail/partner-price-detail.component';
import { NbWindowService } from '@nebular/theme';
import { PartnerPrice } from '../../@core/data/partner-price';

@Component({
  selector: 'ngx-partner-price',
  templateUrl: './partner-price.component.html',
  styleUrls: ['./partner-price.component.scss'],
})
export class PartnerPriceComponent implements OnInit {
  settings = {
    mode: 'external',
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
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
      customerName: {
        title: 'Partner Name',
        type: 'string',
      },
      quotationNo: {
        title: 'Reference',
        type: 'string',
      },
      modifiedBy: {
        title: 'Modified by',
        type: 'string',
      },
      modifiedTm: {
        title: 'Modified Date',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  filter: any = {
    start: 0,
    column: 'customerCode',
  }

  source: PartnerPrice[] = [];

  constructor(private service: PartnerPriceService, private windowService: NbWindowService) {

  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.service.getHeaderPartnerPrice(this.filter).subscribe((result) => {
      this.source = Object.assign([], result);
    });
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData.status = 1;
      this.service.getHeaderPartnerPrice(event.newData).subscribe((value) => {
        this.initData();
      });
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  openCreateDialog(event) {

    //logic
  }

  openWindowForm(event) {
    this.windowService.open(PartnerPriceDetailComponent, {
      title: 'Partner Price Detail',
      context: {
        data: event.data,
      },
    });
  }
}
