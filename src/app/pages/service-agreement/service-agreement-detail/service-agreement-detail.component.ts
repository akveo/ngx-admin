import { Component, Inject, Input, ChangeDetectorRef } from '@angular/core';
import { NbWindowRef, NB_WINDOW_CONTEXT } from '@nebular/theme';
import { ServiceAgreementList } from '../../../@core/data/service-agreement';
import { ServiceAgreementService } from '../sa.service';

@Component({
  selector: 'ngx-service-agreement-detail',
  templateUrl: './service-agreement-detail.component.html',
  styleUrls: ['service-agreement-detail.component.scss'],
})
export class ServiceAgreementDetailComponent {
  @Input() data: ServiceAgreementList;
  constructor(private service: ServiceAgreementService, public windowRef: NbWindowRef, @Inject(NB_WINDOW_CONTEXT) context) {
    if (context != null) {
      this.data = Object.assign({}, context.data);
    }
  }
  onSubmit(){
    // console.log('isi json',this.data.billTitle)
    // let temp = this.data.billTitle
    // this.data.state = 'updated'
    // this.data.billTitle = Math.floor(temp)
    // console.log('after', this.data)
    this.service.postServiceAgreement(this.data).subscribe((value) => {
      //this.changeDetectorRefs.detectChanges()
      this.close();
    });
  }

  close() {
    this.windowRef.close();
  }
}
