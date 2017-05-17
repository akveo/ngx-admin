/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {
  Component, ChangeDetectionStrategy, Input, HostBinding,
  ComponentRef, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, ComponentFactoryResolver, ViewContainerRef,
  OnDestroy,
} from '@angular/core';

import { NgaSuperSearchService } from './search.service';
import { NgaThemeService } from '../../services/theme.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

/**
 * search-field-component is used under the hood by nga-search component
 * can't be used itself
 */
@Component({
  selector: 'nga-search-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    'styles/search.component.modal-zoomin.scss',
    'styles/search.component.layout-rotate.scss',
    'styles/search.component.modal-move.scss',
    'styles/search.component.curtain.scss',
    'styles/search.component.column-curtain.scss',
    'styles/search.component.modal-drop.scss',
    'styles/search.component.modal-half.scss',
    'styles/search.component.simple-search.scss',
  ],
  template: `
    <div class="wrapper">
      <div class="search" (keyup.esc)="onSearchClose()" >
      
        <button (click)="onSearchClose()">
          <i class="ion-ios-close-outline icon"></i>
        </button>
        <div class="form-wrapper">
          <form class="form" (keyup.enter)="onSearchSubmit(searchInput.value)">
            <div class="form-content">
              <input class="search-input" #searchInput autocomplete="off" [attr.placeholder]="placeholder"
              (blur)="onBlur()"/>
            </div>
            <span class="info">Hit enter to search</span>
          </form>
        </div>
        
      </div>
    </div>
    `,
})
export class NgaSearchFieldComponent {

  static readonly TYPE_MODAL_ZOOMIN = 'modal-zoomin';
  static readonly TYPE_ROTATE_LAYOUT = 'rotate-layout';
  static readonly TYPE_MODAL_MOVE = 'modal-move';
  static readonly TYPE_CURTAIN = 'curtain';
  static readonly TYPE_COLUMN_CURTAIN = 'column-curtain';
  static readonly TYPE_MODAL_DROP = 'modal-drop';
  static readonly TYPE_MODAL_HALF = 'modal-half';
  static readonly TYPE_SIMPLE_SEARCH = 'simple-search';

  @Input() searchType: string = 'rotate-layout';
  @Input() placeholder: string = 'akveo';

  @Output() searchClose = new EventEmitter();
  @Output() search = new EventEmitter();

  @ViewChild('searchInput') inputElement: ElementRef;

  @HostBinding('class.show') showSearch: boolean = false;

  @HostBinding('class.modal-zoomin')
  get modalZoomin() {
    return this.searchType === NgaSearchFieldComponent.TYPE_MODAL_ZOOMIN;
  }

  @HostBinding('class.rotate-layout')
  get rotateLayout() {
    return this.searchType === NgaSearchFieldComponent.TYPE_ROTATE_LAYOUT;
  }

  @HostBinding('class.modal-move')
  get modalMove() {
    return this.searchType === NgaSearchFieldComponent.TYPE_MODAL_MOVE;
  }

  @HostBinding('class.curtain')
  get curtain() {
    return this.searchType === NgaSearchFieldComponent.TYPE_CURTAIN;
  }

  @HostBinding('class.column-curtain')
  get columnCurtain() {
    return this.searchType === NgaSearchFieldComponent.TYPE_COLUMN_CURTAIN;
  }

  @HostBinding('class.modal-drop')
  get modalDrop() {
    return this.searchType === NgaSearchFieldComponent.TYPE_MODAL_DROP;
  }

  @HostBinding('class.modal-half')
  get modalHalf() {
    return this.searchType === NgaSearchFieldComponent.TYPE_MODAL_HALF;
  }

  @HostBinding('class.simple-search')
  get simpleSearch() {
    return this.searchType === NgaSearchFieldComponent.TYPE_SIMPLE_SEARCH;
  }

  @Input()
  set type(val: any) {
    this.searchType = val;
  }

  onSearchClose() {
    this.searchClose.emit(true);
  }

  onSearchSubmit(term) {
    if (term) {
      this.search.emit(term);
    }
  }

  onBlur() {
    if (this.searchType === 'simple-search' && this.showSearch) {
      this.onSearchClose();
    }
  }
}

@Component({
  selector: 'nga-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['styles/search.component.scss'],
  template: `
    <div class="search-wrap" [class.show]="showSearch">
      <button (click)="openSearch()">
        <i class="ion-ios-search icon"></i>
      </button>
      <ng-template #attachedSearchField></ng-template>
    </div>
    `,
})
export class NgaSearchComponent implements AfterViewInit, OnDestroy {

  showSearch: boolean = false;
  attachedSearchField: boolean = false;

  @Input() placeholder: string = 'akveo';
  @ViewChild('attachedSearchField', { read: ViewContainerRef }) attachedSearchContainer: ViewContainerRef;

  private searchFieldComponentRef: ComponentRef<any> = null;
  private searchType: string = 'rotate-layout';

  constructor(private searchService: NgaSuperSearchService,
              private themeService: NgaThemeService,
              private componentFactoryResolver: ComponentFactoryResolver) {}

  @HostBinding('class.simple-search')
  get simpleSearch() {
    return this.searchType === NgaSearchFieldComponent.TYPE_SIMPLE_SEARCH;
  }

  @Input()
  set type(val: any) {
    if (val === 'simple-search') {
      this.attachedSearchField = true;
    }
    this.searchType = val;
  }

  openSearch() {
    this.showSearch = true;
    setTimeout(() => {
      this.searchFieldComponentRef.instance.showSearch = true;
      this.searchFieldComponentRef.instance.inputElement.nativeElement.focus();
      this.searchFieldComponentRef.changeDetectorRef.detectChanges();
    }, 1);
    this.searchService.onActivateSearch(this.searchType);
  }

  closeSearch() {
    this.showSearch = false;
    this.searchFieldComponentRef.instance.showSearch = false;
    this.searchFieldComponentRef.instance.inputElement.nativeElement.value = '';
    this.searchFieldComponentRef.instance.inputElement.nativeElement.blur();
    this.searchFieldComponentRef.changeDetectorRef.detectChanges();
    this.searchService.onDeactivateSearch(this.searchType);
  }

  connectToSearchField(component) {
    component.searchType = this.searchType;
    component.placeholder = this.placeholder;
    component.searchClose.subscribe(() => {
      this.closeSearch();
    });

    component.search.subscribe(term => {
      this.searchService.onSearchSubmit(term);
      this.closeSearch();
    });
  }

  createAttachedSearch(component): Observable<any> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this.attachedSearchContainer.createComponent(componentFactory);

    return Observable.of(componentRef);
  }

  ngAfterViewInit() {
    const fieldComponentObservable = this.attachedSearchField ? this.createAttachedSearch(NgaSearchFieldComponent)
      : this.themeService.appendToLayoutTop(NgaSearchFieldComponent);
    fieldComponentObservable.subscribe((componentRef: ComponentRef<any>) => {
      if (componentRef) {
        this.searchFieldComponentRef = componentRef;
        this.connectToSearchField(componentRef.instance);
        componentRef.changeDetectorRef.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    this.themeService.clearLayoutTop();
  }
}

