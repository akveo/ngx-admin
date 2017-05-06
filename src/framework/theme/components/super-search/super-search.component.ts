/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {
  Component, ChangeDetectionStrategy, Input, HostBinding,
  ComponentRef, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit
} from '@angular/core';
import { NgaSuperSearchService } from "./super-search.service";
import { NgaThemeService } from "../../services/theme.service";

/**
 * search-field-component is used under the hood by nga-search component
 * can't be used itself
 */
@Component({
  selector: 'nga-search-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['styles/super-search.component.modal-zoomin.scss',
    'styles/super-search.component.layout-rotate.scss',
    'styles/super-search.component.modal-move.scss',
    'styles/super-search.component.curtain.scss',
    'styles/super-search.component.column-curtain.scss',
    'styles/super-search.component.modal-drop.scss',
    'styles/super-search.component.modal-half.scss',
  ],
  template: `
<div class="search__content">
  <div class="search" (keyup)="($event.keyCode == '27') ? onSearchClose() : null">
  
    <button class="search__btn-close" (click)="onSearchClose()">
      <i class="ion-close-round icon"></i>
    </button>
    <div class="form__wrapper">
      <form class="search__form" (keyup.enter)="onSearchSubmit(searchInput.value)">
        <div class="form__content">
          <input #searchInput class="search__input" placeholder="{{ placeholder }}"
            autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"/>
        </div>
        <span class="search__info">Hit enter to search or ESC to close</span>
      </form>
    </div>
    
  </div>
</div>`
})
export class NgaSearchFieldComponent {

  static readonly TYPE_MODAL_ZOOMIN = 'modal-zoomin';
  static readonly TYPE_ROTATE_LAYOUT = 'rotate-layout';
  static readonly TYPE_MODAL_MOVE = 'modal-move';
  static readonly TYPE_FIELD_ZOOMIN = 'field-zoomin';
  static readonly TYPE_CURTAIN = 'curtain';
  static readonly TYPE_COLUMN_CURTAIN = 'column-curtain';
  static readonly TYPE_MODAL_DROP = 'modal-drop';
  static readonly TYPE_MODAL_HALF = 'modal-half';

  @HostBinding('class.show') public showSearch: boolean = false;
  @Output() searchClose = new EventEmitter();
  @Output() search = new EventEmitter();
  public placeholder: string = 'akveo';
  private searchType: string = 'rotate-layout';

  @ViewChild('searchInput') inputElement: ElementRef;

  constructor() { }


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

  @HostBinding('class.field-zoomin')
  get fieldZoomin() {
    return this.searchType === NgaSearchFieldComponent.TYPE_FIELD_ZOOMIN;
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
}

@Component({
  selector: 'nga-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['styles/super-search.component.scss'],
  template: `
    <div class="search-wrap" [class.show]="showSearch">
      <button class="search__btn-open" (click)="onOpenSearch()">
        <i class="ion-android-search icon"></i>
      </button>
    </div>
    `,
})
export class NgaSearchComponent implements AfterViewInit {

  public showSearch: boolean = false;

  @Input() type: string = 'rotate-layout';
  @Input() placeholder: string = 'akveo';
  private searchFieldComponentRef: ComponentRef<any> = null;

  constructor(private searchService: NgaSuperSearchService,
    private themeService: NgaThemeService) {
  }

  onOpenSearch() {
    this.showSearch = true;
    this.themeService.activateSearch(this.type, true);
    setTimeout(() => {
      this.searchFieldComponentRef.instance.showSearch = true;
      this.searchFieldComponentRef.instance.inputElement.nativeElement.focus();
      this.searchFieldComponentRef.changeDetectorRef.detectChanges();
    }, 1)
  }

  onCloseSearch() {
    this.showSearch = false;
    this.themeService.activateSearch(this.type, false);
    this.searchFieldComponentRef.instance.showSearch = false;
    this.searchFieldComponentRef.instance.inputElement.nativeElement.value = '';
    this.searchFieldComponentRef.instance.inputElement.nativeElement.blur();
    this.searchFieldComponentRef.changeDetectorRef.detectChanges();
  }

  connectToSearchField(component) {
    component.searchType = this.type;
    component.placeholder = this.placeholder;
    component.searchClose.subscribe(() => {
      this.onCloseSearch();
    })

    component.search.subscribe(term => {
      this.searchService.search(term);
      this.onCloseSearch();
    })
  }

  ngAfterViewInit() {
    const fieldComponentObservable = this.themeService.appendToLayoutTop(NgaSearchFieldComponent);
    fieldComponentObservable.subscribe((componentRef: ComponentRef<any>) => {
      if (componentRef) {
        this.searchFieldComponentRef = componentRef;
        this.connectToSearchField(componentRef.instance);
        componentRef.changeDetectorRef.detectChanges();
      }
    });
  }
}

