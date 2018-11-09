import { Component } from '@angular/core';

@Component({
  selector: 'ngx-interactive-progress-bar',
  templateUrl: 'interactive-progress-bar.component.html',
  styleUrls: ['interactive-progress-bar.component.scss'],
})
export class InteractiveProgressBarComponent {

  value = 25;

  setValue(newValue) {
    this.value = Math.min(Math.max(newValue, 0), 100);
  }

  get status(){
    if (this.value <= 25) {
      return 'danger';
    } else if (this.value <= 50) {
      return 'warning';
    } else if (this.value <= 75) {
      return 'info';
    } else {
      return 'success';
    }
  }
}
