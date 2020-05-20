import { Component, OnInit } from '@angular/core';
import { PromotionList } from '../../@core/data/promotion';
import { PartnerPriceService } from './partner-price.service';
import { PartnerPriceDetailComponent } from './partner-price-detail/partner-price-detail.component';
import { NbWindowService } from '@nebular/theme';

@Component({
  selector: 'ngx-partner-price',
  templateUrl: './partner-price.component.html',
  styleUrls: ['./partner-price.component.scss'],
})
export class PartnerPriceComponent implements OnInit {
  settings = {
    mode: 'inline',
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
      code: {
        title: 'Coupon Code',
        type: 'string',
      },
      validDay: {
        title: 'Period',
        type: 'string',
      },
      validFrom: {
        title: 'Valid Start',
        type: 'string',
      },
      validTo: {
        title: 'Valid End',
        type: 'string',
      },
    },
  };

  source: PromotionList[] = [];

  constructor(private service: PartnerPriceService, private windowService: NbWindowService) {

  }

  ngOnInit(): void {
    this.initData();
  }

  initData(){
    this.service.getPromotion().subscribe((result) => {
      this.source = Object.assign([], result);
    });
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData.status = 1;
      this.service.postPromotion(event.newData).subscribe((value) => {
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

  openWindowForm(event) {
    this.windowService.open(PartnerPriceDetailComponent, {
      title: 'Promotion Detail',
      context: {
        data: event.data,
      },
    });
  }
}
