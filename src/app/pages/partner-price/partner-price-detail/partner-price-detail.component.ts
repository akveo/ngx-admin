import { Component, Inject, Input, OnInit } from '@angular/core';
import { NbWindowRef, NB_WINDOW_CONTEXT, NbWindowService } from '@nebular/theme';
import { PartnerPriceService } from '../partner-price.service';
import { PartnerPriceDetail } from '../../../@core/data/partner-price-detail';
import { PartnerPrice } from '../../../@core/data/partner-price';

@Component({
  selector: 'ngx-partner-price-detail',
  templateUrl: './partner-price-detail.component.html',
  styleUrls: ['partner-price-detail.component.scss'],
})
export class PartnerPriceDetailComponent implements OnInit  {

  settings = {
    mode: 'inline',
    pager: {
      perPage: 2,
    },
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
      productCode: {
        title: 'Product',
        type: 'string',
      },
      flowType: {
        title: 'Pricing Level',
        type: 'string',
      },
      sourceCode: {
        title: 'Origin',
        type: 'string',
      },
      destCode: {
        title: 'Destination',
        type: 'string',
      },
      priceCode: {
        title: 'Price',
        type: 'string',
      },
      agingType: {
        title: 'SLA',
        type: 'string',
      },
      validDate: {
        title: 'Valid Date Start',
        type: 'string',
      },
      invalidDate: {
        title: 'Valid Date End',
        type: 'string',
      },
    },
  };

  @Input() data: PartnerPriceDetail[];
  headerData: PartnerPrice;

  constructor(private service: PartnerPriceService, public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private windowService: NbWindowService) {
    if (context != null) {
      this.headerData = Object.assign({}, context.data);
    }
  }

  filter: any = {
    customerCode: '',
  }

  ngOnInit(): void {
    this.filter.customerCode =  this.headerData.customerCode;
    this.getData();
  }

  getData(){
    this.service.getDetailPartnerPrice(this.filter).subscribe((result) => {
      this.data = Object.assign([], result);
    });
  }

  onSubmit() {
    // this.service.postPromotion(this.data).subscribe((value) => {
    //   this.close();
    // });
  }

  close() {
    this.windowRef.close();
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData.status = 1;
      this.service.getHeaderPartnerPrice(event.newData).subscribe((value) => {
        // this.initData();
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

  openWindowForm(event) {
    this.windowService.open(PartnerPriceDetailComponent, {
      title: 'Partner Price Detail',
      context: {
        data: event.data,
      },
    });
  }
}
