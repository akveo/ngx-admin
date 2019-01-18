import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { AbService } from '../../@core/utils/ab.service';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnInit, OnDestroy {

  private alive = true;
  showCallAction = true;

  constructor (private abService: AbService) {}

  ngOnInit() {
    this.abService.onAbEvent(AbService.VARIANT_HIDE_CALL_ACTION)
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => this.showCallAction = false );
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
