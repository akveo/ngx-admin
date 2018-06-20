import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-button-groups',
  styleUrls: ['./button-groups.component.scss'],
  templateUrl: './button-groups.component.html',
})
export class ButtonGroupsComponent implements OnDestroy {

  radioModel = 'left';

  checkboxModel = {
    left: false,
    middle: false,
    right: false,
  };

  dividedCheckboxModel = {
    monday: true,
    tuesday: true,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  };

  paginationModel = 1;

  iconToolbarModel = {
    one: false,
    two: false,
    three: true,
    four: false,
    five: false,
  };

  dividedButtonGroupOne = 'left';

  dividedButtonGroupTwo = {
    left: false,
    middle: false,
    right: false,
  };

  currentTheme: string;
  themeSubscription: Subscription;

  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
