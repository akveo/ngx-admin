import {
  Component, ChangeDetectionStrategy, OnInit, Input, HostBinding,
  ComponentRef, AfterViewInit, Output, EventEmitter, ChangeDetectorRef, ViewChild, ElementRef, Renderer
} from '@angular/core';
import { NgaSuperSearchService } from "./super-search.service";
import { NgaThemeService } from "../../services/theme.service";


@Component({
  selector: 'nga-search-field',
  styleUrls: ['styles/super-search.component.modal-zoomin.scss',
    'styles/super-search.component.layout-rotate.scss',
    'styles/super-search.component.modal-move.scss',
    'styles/super-search.component.field-zoomin.scss',
    'styles/super-search-5.component.scss',
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
          <input #searchInput class="search__input" placeholder="akveo" />
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
















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@Component({
  selector: 'nga-search',
  styleUrls: ['styles/super-search.component.scss'],
  template: `
    <div class="search-wrap" [class.show]="showSearch">
      <button class="search__btn-open" (click)="onOpenSearch()">
        <i class="ion-android-search icon"></i>
      </button>
    </div>
    `,
})
export class NgaSearchComponent {

  static readonly TYPE_MODAL_ZOOMIN = 'modal-zoomin';
  static readonly TYPE_ROTATE_LAYOUT = 'rotate-layout';
  static readonly TYPE_MODAL_MOVE = 'modal-move';
  static readonly TYPE_CURTAIN = 'curtain';
  static readonly TYPE_COLUMN_CURTAIN = 'column-curtain';
  static readonly TYPE_MODAL_DROP = 'modal-drop';
  static readonly TYPE_MODAL_HALF = 'modal-half';

  public showSearch: boolean = false;
  @Input() private type: string = 'rotate-layout';
  private searchFieldComponentRef: ComponentRef<any> = null;

  constructor(private searchService: NgaSuperSearchService,
              private themeService: NgaThemeService) {
  }

  onOpenSearch() {
    this.showSearch = true;
    this.searchService.searchActivate(this.type, true);
    setTimeout(() => {
      this.searchFieldComponentRef.instance.showSearch = true;
      this.searchFieldComponentRef.instance.inputElement.nativeElement.focus();
      this.searchFieldComponentRef.changeDetectorRef.detectChanges();
    }, 1)
  }

  onCloseSearch() {
    this.showSearch = false;
    this.searchService.searchActivate(this.type, false);
    this.searchFieldComponentRef.instance.showSearch = false;
    this.searchFieldComponentRef.instance.inputElement.nativeElement.value = '';
    this.searchFieldComponentRef.instance.inputElement.nativeElement.blur();
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
    component.searchType = this.type;

    component.searchClose.subscribe(() => {
      this.onCloseSearch();
    })

    component.search.subscribe(term => {
      this.searchService.search(term);
      this.onCloseSearch();
    })
  }
}

