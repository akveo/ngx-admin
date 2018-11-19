import { Component } from '@angular/core';

@Component({
  selector: 'ngx-spinner-in-tabs',
  templateUrl: 'spinner-in-tabs.component.html',
  styleUrls: ['spinner-in-tabs.component.scss'],
})

export class SpinnerInTabsComponent {

  loading = false;

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 1000);
  }
}
