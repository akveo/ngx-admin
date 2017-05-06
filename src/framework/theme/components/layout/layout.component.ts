/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { convertToBoolProperty } from '../helpers';
import { NgaThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

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
    <ng-template #layoutTopDynamicArea></ng-template>
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
export class NgaLayoutComponent implements OnDestroy, AfterViewInit {

  // TODO: can we remove this?
  @HostBinding('class.center') centerValue: boolean = false;

  @Input()
  set center(val: boolean) {
    this.centerValue = convertToBoolProperty(val);
  }

  protected searchSubscription: Subscription;

  @ViewChild('layoutTopDynamicArea', { read: ViewContainerRef }) veryTopRef: ViewContainerRef;


  protected themeSubscription: Subscription;
  protected appendSubscription: Subscription;
  protected clearSubscription: Subscription;

  constructor(protected themeService: NgaThemeService,
    protected componentFactoryResolver: ComponentFactoryResolver,
    protected elementRef: ElementRef,
    protected renderer: Renderer2) {
    this.themeSubscription = this.themeService.onThemeChange().subscribe((theme) => {

      if (theme.previous) {
        this.renderer.removeClass(this.elementRef.nativeElement, 'theme-' + theme.previous);
      }
      this.renderer.addClass(this.elementRef.nativeElement, 'theme-' + theme.name);
    });

    this.searchSubscription = this.themeService.onSearchActivate().subscribe((searchState) => {
      if (searchState.status) {
        this.renderer.addClass(this.elementRef.nativeElement, searchState.type);
        setTimeout(() => this.renderer.addClass(this.elementRef.nativeElement, 'show'), 1);
      } else {
        //removing class with animations after 500ms(animation time) to avoid breaking fixed elements
        setTimeout(() => this.renderer.removeClass(this.elementRef.nativeElement, searchState.type), 500);
        this.renderer.removeClass(this.elementRef.nativeElement, 'show');
      }
    });
  }

  ngAfterViewInit(): void {
    this.appendSubscription = this.themeService.onAppendToTop()
      .subscribe((data: { component: any, listener: Subject<any> }) => {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(data.component);
        const componentRef = this.veryTopRef.createComponent(componentFactory);
        data.listener.next(componentRef);
      });

    this.clearSubscription = this.themeService.onClearLayoutTop()
      .subscribe((data: { listener: Subject<any> }) => {
        this.veryTopRef.clear();
        data.listener.next(true);
      });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
    this.appendSubscription.unsubscribe();
    this.clearSubscription.unsubscribe();
  }
}
