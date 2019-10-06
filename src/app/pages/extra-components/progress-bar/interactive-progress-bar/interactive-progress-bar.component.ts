import { Component } from '@angular/core';

@Component({
  selector: 'ngx-interactive-progress-bar',
  templateUrl: 'interactive-progress-bar.component.html',
  styleUrls: ['interactive-progress-bar.component.scss'],
})
export class InteractiveProgressBarComponent {

  value = 25;

  get status() {
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

  get canIncrease(): boolean {
    return this.value < 100;
  }

  get canDecrease(): boolean {
    return this.value > 0;
  }

  decreaseValue() {
    if (this.value > 0) {
      this.value -= 25;
    }
  }

  increaseValue() {
    if (this.value < 100) {
      this.value += 25;
    }
  }
}
