import {Component, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/index';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  currentTheme: string;
  themeSubscription: Subscription;

  statusCardTypes = {
    default: ['primary', 'success', 'info', 'warning'],
    cosmic: ['primary', 'success', 'info', 'warning'],
    corporate: ['warning', 'primary', 'danger', 'secondary'],
  };

  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
