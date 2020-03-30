import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import { NgxPaginationService } from '../../../@theme/services/pagination.service';

@Component({
  selector: 'ngx-pager-block',
  styleUrls: ['./pager-block.component.scss'],
  template: `
    <ng-container *ngIf="paginationItem">
      <nb-card [class.invisible]="!paginationItem.prev" class="left-block">
        <a *ngIf="paginationItem.prev" [routerLink]="paginationItem.prev.link"
          [attr.title]="paginationItem.prev.title">
          <div class="page-title">
            <i class="icon nb-arrow-thin-left"></i>
            <span>{{ paginationItem.prev.title }}</span>
          </div>
          <div class="description">Previous page</div>
        </a>
      </nb-card>

      <nb-card [class.invisible]="!paginationItem.next" class="right-block">
        <a *ngIf="paginationItem.next" [routerLink]="paginationItem.next.link"
          [attr.title]="paginationItem.next.title">
          <div class="page-title">
            <span>{{ paginationItem.next.title }}</span>
            <i class="icon nb-arrow-thin-right"></i>
          </div>
          <div class="description">Next page</div>
        </a>
      </nb-card>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxPagerBlockComponent {
  paginationItem;

  @Input('currentItemSlag')
  set setPaginationItem(currentItemSlag: string) {
    this.paginationItem = this.getPaginationItem(currentItemSlag);
  }

  constructor(private paginationService: NgxPaginationService) {
  }

  getPaginationItem(currentItemSlag) {
    return this.paginationService.getPaginationItem(currentItemSlag);
  }
}
