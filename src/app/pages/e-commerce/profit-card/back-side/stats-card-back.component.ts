import { Component, OnDestroy } from '@angular/core';
import { StatsBarService } from '../../../../@core/data/stats-bar.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'ngx-stats-card-back',
  styleUrls: ['./stats-card-back.component.scss'],
  templateUrl: './stats-card-back.component.html',
})
export class StatsCardBackComponent implements OnDestroy {

  private alive = true;

  chartData: number[];

  constructor(private statsBarData: StatsBarService) {
    this.statsBarData.getStatsBarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.chartData = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
