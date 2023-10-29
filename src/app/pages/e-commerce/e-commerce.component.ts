import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { AbService } from '../../@core/utils/ab.service';
import { MetadataService } from '../../@core/utils/metadata.service';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnInit, OnDestroy {

  private alive = true;
  showCallAction = true;

  constructor (private abService: AbService,
               private metaDataService: MetadataService) {}

  ngOnInit() {
    this.metaDataService.updateTitle('Ngx-admin e-commerce dashboard on Angular 15+ and Nebular.');
    this.metaDataService.updateDescription('E-commerce dashboard on Ngx-admin is Angular 15+ Bootstrap 4+ admin' +
      ' dashboard template. Over 40+ Angular Components and 60+ Usage Examples. Completely FREE and MIT licensed.');
    this.metaDataService.updateKeywords('ngx-admin dashboard, ngx ecommerce dashboard, angular 15+');

    this.abService.onAbEvent(AbService.VARIANT_HIDE_CALL_ACTION)
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => this.showCallAction = false );
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
