import {
  Component, ChangeDetectionStrategy, OnInit, Input, HostBinding,
  ComponentRef, AfterViewInit, Output, EventEmitter, ChangeDetectorRef, ViewChild
} from '@angular/core';
import { NgaSuperSearchService } from "./super-search.service";
import { NgaThemeService } from "../../services/theme.service";


@Component({
  selector: 'nga-search-field',
  styleUrls: ['./super-search.component.modal-zoomin.scss',
    './super-search.component.layout-rotate.scss',
    './super-search.component.modal-move.scss',
    './super-search.component.field-zoomin.scss',
    './super-search-5.component.scss',
    './super-search.component.curtain.scss',
    './super-search.component.column-curtain.scss',
    './super-search.component.modal-drop.scss',
    './super-search.component.modal-half.scss',
  ],
  template: `
<div class="search__content">
  <div class="search" (keyup)="($event.keyCode == '27' && showSearch) ? searchToggle() : null">
  
    <button class="search__btn-close" (click)="searchToggle()">
      <i class="ion-close-round icon"></i>
    </button>
    <div class="form__wrapper">
      <form class="search__form" (keyup.enter)="showSearch ? onSearchSubmit(searchInput.value) : null">
        <div class="form__content">
          <input #searchInput class="search__input" placeholder="akveo"/>
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
  public searchType: string = 'rotate-layout';

  @Output() searchClose = new EventEmitter();
  @Output() search = new EventEmitter();

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

  searchToggle() {
    this.showSearch = !this.showSearch;
    this.searchClose.emit(true);
  }

  onSearchSubmit(term) {
    if (term) {
      this.showSearch = !this.showSearch;
      this.search.emit(term);
    }
  }
}
















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@Component({
  selector: 'nga-search',
  styleUrls: ['./super-search.component.scss'],
  template: `
    <div class="search-wrap" [class.show]="showSearch">
      <button class="search__btn-open" (click)="searchToggle()">
        <i class="ion-android-search icon"></i>
      </button>
    </div>
    `,
})
export class NgaSearchComponent {

  static readonly TYPE_MODAL_ZOOMIN = 'modal-zoomin';
  static readonly TYPE_ROTATE_LAYOUT = 'rotate-layout';
  static readonly TYPE_MODAL_MOVE = 'modal-move';
  static readonly TYPE_FIELD_ZOOMIN = 'field-zoomin';
  static readonly TYPE_CURTAIN = 'curtain';
  static readonly TYPE_COLUMN_CURTAIN = 'column-curtain';
  static readonly TYPE_MODAL_DROP = 'modal-drop';
  static readonly TYPE_MODAL_HALF = 'modal-half';

  public showSearch: boolean = false;
  public searchType: string = 'rotate-layout';
  private searchFieldComponentRef: ComponentRef<any> = null;

  constructor(private searchService: NgaSuperSearchService,
    private themeService: NgaThemeService) {
  }

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
  set type(val: string) {
    this.searchType = val;
  }

  searchToggle() {
    this.showSearch = !this.showSearch;

    this.searchService.searchActivate(this.searchType, this.showSearch);

    this.searchFieldComponentRef.instance.showSearch = this.showSearch;
    this.searchFieldComponentRef.changeDetectorRef.detectChanges();
  }


  ngAfterViewInit() {
    const fieldComponentObservable = this.themeService.appendToLayoutTop(NgaSearchFieldComponent);
    fieldComponentObservable.subscribe((componentRef: ComponentRef<any>) => {
      if (componentRef) {
        this.searchFieldComponentRef = componentRef;//need to start ChangeDetection for instance-driven remote component
        this.connectToSearchField(componentRef.instance);
        componentRef.changeDetectorRef.detectChanges();
      }
    });
  }

  connectToSearchField(component) {
    component.searchType = this.searchType;

    component.searchClose.subscribe(() => {
      this.showSearch = !this.showSearch;
      this.searchService.searchActivate(this.searchType, this.showSearch);//TODO: try to use theme-service
    })

    component.search.subscribe(term => {
      this.showSearch = !this.showSearch;
      this.searchService.search(term);
      this.searchService.searchActivate(this.searchType, this.showSearch);//TODO: try to use theme-service
    })
  }

  // connectToRemoteSearchField(componentRef) {
  //   this.searchFieldComponentRef = componentRef;
  //   componentRef.instance.searchType = this.searchType;
  //   this.searchFieldComponentRef.changeDetectorRef.detectChanges();
  //
  //   componentRef.instance.searchClose.subscribe(() => {
  //     this.showSearch = !this.showSearch;
  //     this.searchService.searchActivate(this.searchType, this.showSearch);
  //   })
  //
  //   componentRef.instance.search.subscribe(term => {
  //     this.showSearch = !this.showSearch;
  //     this.searchService.search(term);
  //     this.searchService.searchActivate(this.searchType, this.showSearch);
  //   })
  // }
}

