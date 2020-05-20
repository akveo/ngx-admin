import { Component, Inject, Input } from '@angular/core';
import { NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { PromotionList } from '../../../@core/data/promotion';
import { PartnerPriceService } from '../partner-price.service';

@Component({
  selector: 'ngx-partner-price-detail',
  templateUrl: './partner-price-detail.component.html',
  styleUrls: ['partner-price-detail.component.scss'],
})
export class PartnerPriceDetailComponent {

  @Input() data: PromotionList;

  constructor(private service: PartnerPriceService, public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context) {
    if (context != null) {
      this.data = Object.assign({}, context.data);
    }
  }

  onSubmit(){
    this.service.postPromotion(this.data).subscribe((value) => {
      this.close();
    });
  }

  close() {
    this.windowRef.close();
  }
}
