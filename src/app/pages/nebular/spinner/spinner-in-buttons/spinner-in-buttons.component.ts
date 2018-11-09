import { Component } from '@angular/core';

@Component({
  selector: 'ngx-spinner-in-buttons',
  templateUrl: 'spinner-in-buttons.component.html',
  styleUrls: ['spinner-in-buttons.component.scss'],
})

export class SpinnerInButtonsComponent {

  loading = false;

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 3000);
  }
}
