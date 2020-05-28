import { Component, Inject, Input, ChangeDetectorRef } from '@angular/core';
import { NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { BillingList } from '../../../@core/data/billing';
import { ActivatedRoute } from '@angular/router';
import { BillingService } from '../billing.service';
import { BillingComponent } from '../billing.component';

@Component({
  selector: 'ngx-billing-detail',
  templateUrl: './billing-detail.component.html',
  styleUrls: ['billing-detail.component.scss'],
})
export class BillingDetailComponent {

  @Input() data: BillingList;
  constructor(private service: BillingService, public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context, private changeDetectorRefs: ChangeDetectorRef) {
    if (context != null) {
      this.data = Object.assign({}, context.data);
    }
  }
  private router: ActivatedRoute;

  onSubmit(){
    console.log('isi json',this.data.billTitle)
    let temp = this.data.billTitle
    this.data.state = 'updated'
    this.data.billTitle = Math.floor(temp)
    console.log('after', this.data)
    this.service.postBilling(this.data).subscribe((value) => {
      this.changeDetectorRefs.detectChanges()
      // this.router.routeReuseStrategy.shouldReuseRoute = function () {
      //   return false;
      // };
      window.location.reload();
      this.close();
    });
  }

  close() {
    console.log('masuk')
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
