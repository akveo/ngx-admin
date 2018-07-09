import { Component } from '@angular/core';

@Component({
  selector: 'ngx-slide-out',
  styleUrls: ['./slide-out.component.scss'],
  templateUrl: './slide-out.component.html',
})
export class SlideOutComponent {

  showVisitorsStatistics = false;

  toggleStatistics() {
    this.showVisitorsStatistics = !this.showVisitorsStatistics;
  }
}
