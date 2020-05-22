import { Component, Inject, Input } from '@angular/core';
import { NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { PromotionList } from '../../../@core/data/promotion';
import { PromotionService } from '../promotion.service';

@Component({
  selector: 'ngx-promotion-detail',
  templateUrl: './promotion-detail.component.html',
  styleUrls: ['promotion-detail.component.scss'],
})
export class PromotionDetailComponent {

  @Input() data: PromotionList;

  constructor(private service: PromotionService, public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context) {
    if (context != null) {
      this.data = Object.assign({}, context.data);
    }
  }

  onSubmit() {
    this.service.postPromotion(this.data).subscribe((value) => {
      this.close();
    });
  }

  close() {
    this.windowRef.close();
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
