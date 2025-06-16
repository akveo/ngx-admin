import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

interface CountryData {
  name: string;
  coverage: number;
  records: string;
  updateFrequency: string;
  status: 'active' | 'coming-soon' | 'limited';
}

@Component({
  selector: 'ngx-country-coverage',
  styleUrls: ['./country-coverage.component.scss'],
  templateUrl: './country-coverage.component.html',
})
export class CountryCoverageComponent implements OnDestroy {

  private alive = true;

  countries: CountryData[] = [
    {
      name: 'Australia',
      coverage: 95,
      records: '25.6M',
      updateFrequency: 'Daily',
      status: 'active'
    },
    {
      name: 'Indonesia',
      coverage: 82,
      records: '180.2M',
      updateFrequency: 'Weekly',
      status: 'active'
    },
    {
      name: 'Malaysia',
      coverage: 78,
      records: '28.4M',
      updateFrequency: 'Weekly',
      status: 'active'
    },
    {
      name: 'Japan',
      coverage: 88,
      records: '126.8M',
      updateFrequency: 'Daily',
      status: 'active'
    },
  ];

  selectedRegion = 'all';
  regions = ['all', 'apac', 'mena', 'europe'];

  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'active':
        return 'checkmark-circle-2-outline';
      case 'coming-soon':
        return 'clock-outline';
      case 'limited':
        return 'alert-triangle-outline';
      default:
        return 'minus-circle-outline';
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'active':
        return 'success';
      case 'coming-soon':
        return 'warning';
      case 'limited':
        return 'danger';
      default:
        return 'basic';
    }
  }

  getCoverageStatus(coverage: number): string {
    if (coverage >= 80) return 'success';
    if (coverage >= 60) return 'warning';
    return 'danger';
  }
}