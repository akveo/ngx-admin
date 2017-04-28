import {Component, ChangeDetectionStrategy, OnInit, Input, HostBinding,} from '@angular/core';
import { NgaSuperSearchService } from "./super-search.service";

@Component({
  selector: 'nga-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./super-search.component.scss'],
  templateUrl: './super-search.component.html',
})
export class NgaSearchComponent implements OnInit{

  static readonly TYPE_OPTION1 = 'option1';
  static readonly TYPE_OPTION2 = 'option2';
  static readonly TYPE_OPTION3 = 'option3';

  private showSearch: boolean = false;
  private searchType: string = 'option1';

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
    this.showSearch = !this.showSearch;
    this.searchService.searchActivate(this.searchType, this.showSearch)
  }


  ngOnInit() {

  }
}
