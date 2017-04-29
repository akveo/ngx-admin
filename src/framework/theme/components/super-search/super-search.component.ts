import {Component, ChangeDetectionStrategy, OnInit, Input, HostBinding, Renderer2, ElementRef,} from '@angular/core';
import { NgaSuperSearchService } from "./super-search.service";
import {Subscription} from "rxjs";


@Component({
    selector: 'nga-search-field',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./super-search-1.component.scss',
                './super-search-2.component.scss',
                './super-search-3.component.scss'],
    template: `
<div class="search__content">
  <div class="search"(keyup)="($event.keyCode == '27') ? searchToggle() : null">
  
    <button id="btn-search-close" class="btn btn--search-close" (click)="searchToggle()">
      <i class="ion-close-round icon"></i>
    </button>
  
    <form class="search__form">
      <input class="search__input" placeholder="akveo"/>
      <span class="search__info">Hit enter to search or ESC to close</span>
    </form>
  
  </div>
</div>`
})
export class NgaSearchFieldComponent {
  @Input() private showSearch: boolean = false;
  public searchType: string = 'option3';
  private activateSubscription: Subscription;

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef,
    private searchService: NgaSuperSearchService) {
    this.activateSubscription = this.searchService.onSearchActivate().subscribe((searchState) => {
      this.showSearch = searchState.status;
      searchState.status ? this.renderer.addClass(this.elementRef.nativeElement, 'show')
        : this.renderer.removeClass(this.elementRef.nativeElement, 'show');
        })
  }

  @HostBinding('class.option1')
  get option1() {
    return this.searchType === NgaSearchComponent.TYPE_OPTION1;
  }

  @HostBinding('class.option2')
  get option2() {
    return this.searchType === NgaSearchComponent.TYPE_OPTION2;
  }

  @HostBinding('class.option3')
  get option3() {
    return this.searchType === NgaSearchComponent.TYPE_OPTION3;
  }


  searchToggle() {
    this.showSearch = !this.showSearch;
    this.searchService.searchActivate(this.searchType, false);
  }
}
















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@Component({
  selector: 'nga-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./super-search.component.scss'],
  template:`
    <div class="search-wrap">
      <button id="btn-search" class="btn btn--search" (click)="searchToggle()">
        <i class="ion-android-search icon"></i>
      </button>
    </div>`,
})
export class NgaSearchComponent implements OnInit{

  static readonly TYPE_OPTION1 = 'option1';
  static readonly TYPE_OPTION2 = 'option2';
  static readonly TYPE_OPTION3 = 'option3';

  // private showSearch: boolean = false;
  public searchType: string = 'option1';

  constructor(private searchService: NgaSuperSearchService){

  }

  @HostBinding('class.option1')
  get option1() {
    return this.searchType === NgaSearchComponent.TYPE_OPTION1;
  }

  @HostBinding('class.option2')
  get option2() {
    return this.searchType === NgaSearchComponent.TYPE_OPTION2;
  }

  @HostBinding('class.option3')
  get option3() {
    return this.searchType === NgaSearchComponent.TYPE_OPTION3;
  }

  @Input()
  set type (val: string) {
    this.searchType = val;
  }

  searchToggle() {
    // this.showSearch = !this.showSearch;
    this.searchService.searchActivate(this.searchType, true);
  }


  ngOnInit() {
    let fieldComponentObservable = this.searchService.createSearchField(NgaSearchFieldComponent, {type: this.searchType});
    fieldComponentObservable.subscribe((component) => {
      console.log(component);
    });
  }
}
