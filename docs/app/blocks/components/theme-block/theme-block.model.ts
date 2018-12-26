import { Injectable } from '@angular/core';

@Injectable()
export class ThemeBlockModel {
  themeTitle: string;
  themeName: string;
  parentTheme: string;
  themeProperties: any[];

  setThemeTitle(value) {
    this.themeTitle = value;
  }

  setThemeName(value) {
    this.themeName = value;
  }

  setParentTheme(value) {
    this.parentTheme = value;
  }

  setThemeProperties(value) {
    this.themeProperties = value;
  }
}
