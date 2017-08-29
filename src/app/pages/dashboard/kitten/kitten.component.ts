import { Component } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-kitten',
  styleUrls: ['./kitten.component.scss'],
  templateUrl: './kitten.component.html',
})
export class KittenComponent {

  currentTheme: string;

  constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }
}
