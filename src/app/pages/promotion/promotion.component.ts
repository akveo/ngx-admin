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
        type: 'date',
      },
      validTo: {
        title: 'Valid End',
        type: 'date',
      },
    },
  };

  source: PromotionList[] = [];

  constructor(private service: PromotionService, private windowService: NbWindowService) {

  }

  ngOnInit(): void {
    this.service.getPromotion().subscribe((result) => {
      this.source = Object.assign([], result);
      console.log(this.source);
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
    this.windowService.open(PromotionDetailComponent, { title: `Promotion Detail` });
  }
}
