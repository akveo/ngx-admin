import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterContentInit,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nga-tab',
  template: `
    <div [hidden]="!active">
      <ng-content></ng-content>
    </div>
  `,
})
export class NgaTabComponent {
  @Input() tabTitle: string;
  @Input() active: boolean = false;
  @Input() route: string;
}

@Component({
  selector: 'nga-tabset',
  styleUrls: ['./tabset.component.scss'],
  template: `
    <ul class="nga-tabset">
      <li *ngFor="let tab of tabs" 
      (click)="$event.preventDefault();selectTab(tab);changeTab.emit(tab)" 
      [class.active]="tab.active">
        <a href="#">{{tab.tabTitle}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
    <ng-content select="nga-tab"></ng-content>
  `,
})
export class NgaTabsetComponent implements AfterContentInit, OnInit {
  @ContentChildren(NgaTabComponent) tabs: QueryList<NgaTabComponent>;

  @Input() routes: boolean = false;

  @Output() changeTab = new EventEmitter<any>();

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        const activeTabs = this.tabs.filter(tab => this.routes ? tab.route === params.tab : tab.active);

        if (!activeTabs.length) {
          this.selectTab(this.tabs.first);
        } else {
          this.selectTab(activeTabs[0]);
        }
      });
  }

  selectTab(tab: NgaTabComponent) {
    this.tabs.forEach(tb => tb.active = false);

    tab.active = true;
  }
}
