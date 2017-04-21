/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { NgaThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs/Subscription';

/**
 * Component intended to be used within  the `<nga-layout>` component.
 * It adds styles for a preset column section.
 */
@Component({
  selector: 'nga-layout-column',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaLayoutColumnComponent {

  @HostBinding('class.left') leftValue: boolean;

  @Input()
  set left(val: boolean) {
    this.leftValue = convertToBoolProperty(val);
  }
}

/**
 * Component intended to be used within  the `<nga-layout>` component.
 * It adds styles for a preset header section.
 */
@Component({
  selector: 'nga-layout-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav [class.fixed]="fixedValue">
      <ng-content></ng-content>
    </nav>
  `,
})
export class NgaLayoutHeaderComponent {

  @HostBinding('class.fixed') fixedValue: boolean;

  @Input()
  set fixed(val: boolean) {
    this.fixedValue = convertToBoolProperty(val);
  }

}

/**
 * Component intended to be used within  the `<nga-layout>` component.
 * It adds styles for a preset footer section.
 */
@Component({
  selector: 'nga-layout-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav [class.fixed]="fixedValue">
      <ng-content></ng-content>
    </nav>
  `,
})
export class NgaLayoutFooterComponent {

  @HostBinding('class.fixed') fixedValue: boolean;

  @Input()
  set fixed(val: boolean) {
    this.fixedValue = convertToBoolProperty(val);
  }

}

/**
 * A basic content container component
 *
 * While this component can be used alone, it also provides a number
 * of child components for common layout sections, including:
 * - nga-sidebar
 * - nga-layout-column
 * - nga-layout-content
 * - nga-layout-header
 * - nga-layout-footer
 */
@Component({
  selector: 'nga-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./layout.component.scss'],
  template: `
    <div class="layout">
      <ng-content select="nga-layout-header"></ng-content>
      <div class="layout-container">
        <ng-content select="nga-sidebar"></ng-content>
        <ng-content select="nga-sidebar[left]"></ng-content>
        <div class="content" [class.center]="centerValue">
          <div class="columns">
            <ng-content select="nga-layout-column"></ng-content>
          </div>
          <ng-content select="nga-layout-footer"></ng-content>
        </div>
        <ng-content select="nga-sidebar[right]"></ng-content>
      </div>
    </div>
  `,
})
export class NgaLayoutComponent implements OnDestroy {

  // TODO: can we remove this?
  @HostBinding('class.center') centerValue: boolean = false;

  @Input()
  set center(val: boolean) {
    this.centerValue = convertToBoolProperty(val);
  }

  protected themeSubscription: Subscription;

  constructor(protected themeService: NgaThemeService,
              protected elementRef: ElementRef,
              protected renderer: Renderer2) {
    this.themeSubscription = this.themeService.onThemeChange().subscribe((theme) => {

      if (theme.previous) {
        this.renderer.removeClass(this.elementRef.nativeElement, 'theme-' + theme.previous);
      }
      this.renderer.addClass(this.elementRef.nativeElement, 'theme-' + theme.name);
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
