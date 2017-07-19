/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {
  Component, ChangeDetectionStrategy, Input, HostBinding,
  ComponentRef, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, ComponentFactoryResolver, ViewContainerRef,
  OnDestroy, OnInit,
} from '@angular/core';

import { NgaSuperSearchService } from './search.service';
import { NgaThemeService } from '../../services/theme.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

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
      <div class="search" (keyup.esc)="closeSearch()" >
        <button (click)="closeSearch()">
          <i class="ion-ios-close-outline icon">&nbsp;</i>
        </button>
        <div class="form-wrapper">
          <form class="form" (keyup.enter)="submitSearch(searchInput.value)">
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

  @Input() searchType: string;
  @Input() placeholder: string;

  @Output() searchClose = new EventEmitter();
  @Output() search = new EventEmitter();

  @ViewChild('searchInput') inputElement: ElementRef;

  @Input() @HostBinding('class.show') showSearch: boolean = false;

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

  closeSearch() {
    this.searchClose.emit(true);
  }

  submitSearch(term) {
    if (term) {
      this.search.emit(term);
    }
  }

  onBlur() {
    if (this.searchType === NgaSearchFieldComponent.TYPE_SIMPLE_SEARCH && this.showSearch) {
      this.closeSearch();
    }
  }
}

@Component({
  selector: 'nga-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['styles/search.component.scss'],
  template: `
    <div class="search-wrap">
      <button (click)="openSearch()">
        <i class="ion-ios-search icon">&nbsp;</i>
      </button>
      <ng-template #attachedSearchContainer></ng-template>
    </div>
    `,
})
export class NgaSearchComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() tag: string;
  @Input() placeholder: string = 'Search...';

  @HostBinding('class.show') showSearch: boolean = false;

  @ViewChild('attachedSearchContainer', { read: ViewContainerRef }) attachedSearchContainer: ViewContainerRef;

  private searchFieldComponentRef: ComponentRef<any> = null;
  private searchType: string = 'rotate-layout';
  private createFieldSubscription: Subscription;
  private activateSearchSubscription: Subscription;
  private deactivateSearchSubscription: Subscription;

  constructor(private searchService: NgaSuperSearchService,
    private themeService: NgaThemeService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  @HostBinding('class.simple-search')
  get simpleSearch() {
    return this.searchType === NgaSearchFieldComponent.TYPE_SIMPLE_SEARCH;
  }

  @Input()
  set type(val: any) {
    this.searchType = val;
  }

  openSearch() {
    this.searchService.activateSearch(this.searchType, this.tag);
  }

  connectToSearchField(componentRef) {
    this.searchFieldComponentRef = componentRef;
    componentRef.instance.searchType = this.searchType;
    componentRef.instance.placeholder = this.placeholder;
    componentRef.instance.searchClose.subscribe(() => {
      this.searchService.deactivateSearch(this.searchType, this.tag);
    });

    componentRef.instance.search.subscribe(term => {
      this.searchService.submitSearch(term, this.tag);
      this.searchService.deactivateSearch(this.searchType, this.tag);
    });
    componentRef.changeDetectorRef.detectChanges();
  }

  createAttachedSearch(component): Observable<any> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = this.attachedSearchContainer.createComponent(componentFactory);

    return Observable.of(componentRef);
  }

  ngOnInit() {
    this.activateSearchSubscription = this.searchService.onSearchActivate().subscribe((data) => {
      if (!this.tag || data.tag === this.tag) {
        this.showSearch = true;
        if (this.searchType !== NgaSearchFieldComponent.TYPE_SIMPLE_SEARCH) {
          this.themeService.appendLayoutClass(this.searchType);
          Observable.of(null).delay(0).subscribe(() => {
            this.themeService.appendLayoutClass('with-search');
          });
        }
        this.searchFieldComponentRef.instance.showSearch = true;
        this.searchFieldComponentRef.instance.inputElement.nativeElement.focus();
        this.searchFieldComponentRef.changeDetectorRef.detectChanges();
      }
    });

    this.deactivateSearchSubscription = this.searchService.onSearchDeactivate().subscribe((data) => {
      if (!this.tag || data.tag === this.tag) {
        this.showSearch = false;
        this.searchFieldComponentRef.instance.showSearch = false;
        this.searchFieldComponentRef.instance.inputElement.nativeElement.value = '';
        this.searchFieldComponentRef.instance.inputElement.nativeElement.blur();
        this.searchFieldComponentRef.changeDetectorRef.detectChanges();
        if (this.searchType !== NgaSearchFieldComponent.TYPE_SIMPLE_SEARCH) {
          this.themeService.removeLayoutClass('with-search');
          Observable.of(null).delay(500).subscribe(() => {
            this.themeService.removeLayoutClass(this.searchType);
          });
        }
      }
    });
  }

  ngAfterViewInit() {
    const fieldComponentObservable = this.searchType === NgaSearchFieldComponent.TYPE_SIMPLE_SEARCH ?
      this.createAttachedSearch(NgaSearchFieldComponent)
      : this.themeService.appendToLayoutTop(NgaSearchFieldComponent);
    this.createFieldSubscription = fieldComponentObservable.subscribe((componentRef: ComponentRef<any>) => {
      if (componentRef) {
        this.connectToSearchField(componentRef);
      }
    });
  }

  ngOnDestroy() {
    this.activateSearchSubscription.unsubscribe();
    this.deactivateSearchSubscription.unsubscribe();
    this.createFieldSubscription.unsubscribe();
    // TODO: fix issue with destroy and remove this condition
    if (this.searchFieldComponentRef) {
      this.searchFieldComponentRef.destroy();
    }
  }
}
