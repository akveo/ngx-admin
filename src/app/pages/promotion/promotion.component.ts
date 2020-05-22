import { Component, OnInit } from '@angular/core';
import { PromotionList } from '../../@core/data/promotion';
import { PromotionService } from './promotion.service';
import { PromotionDetailComponent } from './promotion-detail/promotion-detail.component';
import { NbWindowService } from '@nebular/theme';

@Component({
  selector: 'ngx-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss'],
})
export class PromotionComponent implements OnInit {
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
      confirmSave: true,
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

  constructor(private service: PromotionService, private windowService: NbWindowService) {

  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
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
      this.service.deletePromotion(event.data).subscribe((value) => {
        this.initData();
      });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  openWindowForm(event) {
    this.windowService.open(PromotionDetailComponent, {
      title: 'Promotion Detail',
      context: {
        data: event.data,
      },
    });
  }
}
