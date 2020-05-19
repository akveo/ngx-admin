import { Component, Inject } from '@angular/core';
import { NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { PromotionList } from '../../../@core/data/promotion';

@Component({
  selector: 'ngx-promotion-detail',
  templateUrl: './promotion-detail.component.html',
  styleUrls: ['promotion-detail.component.scss'],
})
export class PromotionDetailComponent {

  data: PromotionList;

  constructor(public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context) {
    if(context != null){
      this.data = Object.assign({}, context.data);
    }
  }

  close() {
    this.windowRef.close();
  }
}
