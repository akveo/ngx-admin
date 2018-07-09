import { Component, OnDestroy, Input } from '@angular/core';
import { NbLayoutDirectionService, NbLayoutDirection } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ngx-layout-direction-switcher',
  template: `
    <ngx-switcher
      [firstValue]="directions.RTL"
      [secondValue]="directions.LTR"
      [firstValueLabel]="'Arabic' | translate"
      [secondValueLabel]="'English' | translate"
      [value]="currentDirection"
      (valueChange)="toggleDirection($event)"
      [vertical]="vertical"
    >
    </ngx-switcher>
  `,
})
export class LayoutDirectionSwitcherComponent implements OnDestroy {
  directions = NbLayoutDirection;
  currentDirection: NbLayoutDirection;
  alive = true;

  @Input() vertical: boolean = false;

  constructor(private translate: TranslateService, private directionService: NbLayoutDirectionService) {
    this.currentDirection = this.directionService.getDirection();

    this.directionService.onDirectionChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(newDirection => this.currentDirection = newDirection);
  }

  toggleDirection(newDirection) {
    this.directionService.setDirection(newDirection);
    if (newDirection === 'rtl') {
      this.translate.use('ar');
    } else {
      this.translate.use('en');
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
