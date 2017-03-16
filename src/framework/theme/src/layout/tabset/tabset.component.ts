import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterContentInit,
  HostBinding,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { convertToBoolProperty } from '../helpers';

@Component({
  selector: 'nga-tab',
  template: `
    <div class="nga-tab" [hidden]="!active">
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
        <a href>{{tab.tabTitle}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
    <ng-content select="nga-tab"></ng-content>
  `,
})
export class NgaTabsetComponent implements AfterContentInit {

  @ContentChildren(NgaTabComponent) tabs: QueryList<NgaTabComponent>;

  @HostBinding('class.full-width') fullWidthValue: boolean = false;

  @Input() routes: boolean = false;

  @Input()
  set fullWidth(val: boolean) {
    this.fullWidthValue = convertToBoolProperty(val);
  }

  @Output() changeTab = new EventEmitter<any>();

  constructor(private activatedRoute: ActivatedRoute) {
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
