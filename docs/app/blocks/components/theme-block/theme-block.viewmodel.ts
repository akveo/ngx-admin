import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of as observableOf } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ThemeBlockModel } from './theme-block.model';

@Injectable()
export class ThemeBlockViewModel {
  private searchChanges$ = new BehaviorSubject<string>(null);

  constructor(private model: ThemeBlockModel) {}

  changeSearch(value) {
    this.searchChanges$.next(value);
  }

  get themeTitle(): string {
    return this.model.themeTitle;
  }

  set themeTitle(value) {
    this.model.setThemeTitle(value);
  }

  get themeName(): string {
    return this.model.themeName;
  }

  set themeName(value) {
    this.model.setThemeName(value);
  }

  get parentTheme(): string {
    return this.model.parentTheme;
  }

  set parentTheme(value) {
    this.model.setParentTheme(value);
  }

  get themeProperties(): any[] {
    return this.model.themeProperties;
  }

  set themeProperties(value) {
    const result = Object.entries(value).map(([key, data]) => {
      const propertyValue = data['value'];
      return {
        name: key,
        value: Array.isArray(propertyValue) ? propertyValue.join(' ') : propertyValue,
        parents: data['parents'],
      };
    });
    this.model.setThemeProperties(result);
  }

  get filteredThemeProperties(): Observable<any[]> {
    return this.searchChanges$.asObservable().pipe(
      switchMap(value => {
        if (value) {
          return observableOf(
            this.themeProperties.filter(({ name }) => name.toLowerCase().includes(value.toLowerCase())),
          );
        }
        return observableOf(this.themeProperties);
      }),
    );
  }
}
