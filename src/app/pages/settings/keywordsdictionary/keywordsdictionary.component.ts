import { Component, Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  Title: string;
  Level: string;
  Parent: string;
  Score?: number;
}

@Component({
  selector: 'ngx-tree-grid',
  templateUrl: './keywordsdictionary.component.html',
  styleUrls: ['./keywordsdictionary.component.scss'],
})
export class KeywordsDictionaryComponent {
  customColumn = 'Title';
  defaultColumns = [ 'Level', 'Parent', 'Score' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data: { Title: 'Promotioon', Level: '0', Parent: '0', Score: 108 },
      children: [
        {
          data: { Title: 'Bonus', Level: '1', Parent: '0', Score: 43 },
          children: [
            { data: { Title: 'Welcome Bonus', Level: '2', Parent: '1', Score: 9} },
            { data: { Title: 'Daily Bonus', Level: '2', Parent: '1', Score: 9} },
            { data: { Title: 'Topup Bonus', Level: '2', Parent: '1', Score: 9} },
            { data: { Title: 'Extra Bonus', Level: '2', Parent: '1', Score: 9} },
            { data: { Title: 'Free Angpao', Level: '2', Parent: '1', Score: 7} },
          ]
        },
        {
          data: { Title: 'Jackpot', Level: '1', Parent: '0', Score: 24 },
          children: [
            { data: { Title: 'Daily Jackpots', Level: '2', Parent: '1', Score: 8} },
            { data: { Title: 'Progressive Jackpot', Level: '2', Parent: '1', Score: 8} },
            { data: { Title: 'Pooled Jackpot', Level: '2', Parent: '1', Score: 8} },
          ]
        },
        {
          data: { Title: 'Rebate', Level: '1', Parent: '0', Score: 41 },
          children: [
            { data: { Title: 'Friend Refer', Level: '2', Parent: '1', Score: 5} },
            { data: { Title: 'Free Credit', Level: '2', Parent: '1', Score: 8} },
            { data: { Title: 'New Member', Level: '2', Parent: '1', Score: 5} },
            { data: { Title: 'Deposit', Level: '2', Parent: '1', Score: 5} },
            { data: { Title: 'Affiliate', Level: '2', Parent: '1', Score: 5} },
            { data: { Title: 'Redeem Point', Level: '2', Parent: '1', Score: 5} },
            { data: { Title: 'Cashout', Level: '2', Parent: '1', Score: 8} },

          ]
        },
      ],
    },
    {
      data: { Title: 'Advertisement', Level: '0', Parent: '0', Score: 137 },
      children: [
        { data: { Title: 'Slogan', Level: '1', Parent: '0', Score: 137 },
        children: [
          { data: { Title: 'Most Trusted Comapany', Level: '2', Parent: '1', Score: 7} },
          { data: { Title: 'Trusted Agent', Level: '2', Parent: '1', Score: 7} },
          { data: { Title: 'Top Slot ', Level: '2', Parent: '1', Score: 7} },
          { data: { Title: 'Betting & Gambling', Level: '2', Parent: '1', Score: 10} },
          { data: { Title: 'HOT', Level: '2', Parent: '1', Score: 3} },
          { data: { Title: 'Fast Processing', Level: '2', Parent: '1', Score: 5} },
          { data: { Title: 'Real Money', Level: '2', Parent: '1', Score: 5} },
          { data: { Title: 'Fast Withdrawal', Level: '2', Parent: '1', Score: 7} },
          { data: { Title: 'Play Now', Level: '2', Parent: '1', Score: 2} },
          { data: { Title: 'Download Now', Level: '2', Parent: '1', Score: 2} },
          { data: { Title: 'Available Now', Level: '2', Parent: '1', Score: 2} },
          { data: { Title: 'Rollover', Level: '2', Parent: '1', Score: 5} },
          { data: { Title: 'Turnover', Level: '2', Parent: '1', Score: 5} },
          { data: { Title: 'Lucky Win', Level: '2', Parent: '1', Score: 5} },
          { data: { Title: 'Easy Win', Level: '2', Parent: '1', Score: 7} },
          { data: { Title: 'Big Win', Level: '2', Parent: '1', Score: 7} },
          { data: { Title: 'ID Ong', Level: '2', Parent: '1', Score: 9} },
          { data: { Title: 'Money Fever', Level: '2', Parent: '1', Score: 8} },
          { data: { Title: 'Safety Gaming Platform', Level: '2', Parent: '1', Score: 8} },
          { data: { Title: 'High Payout', Level: '2', Parent: '1', Score: 8} },
          { data: { Title: 'Games Tips', Level: '2', Parent: '1', Score: 7} },
          { data: { Title: 'Ambassadors', Level: '2', Parent: '1', Score: 5} },
          { data: { Title: 'Collaborate Partners', Level: '2', Parent: '1', Score: 3} },
          { data: { Title: 'Crypto Currency', Level: '2', Parent: '1', Score: 3} },

        ],},
      ],
    },
    {
      data: { Title: 'Common', Level: '0', Parent: '0', Score: 88 },
      children: [
        {
          data: { Title: 'Game Related', Level: '1', Parent: '0', Score: 88 },
          children: [
            { data: { Title: 'Balance', Level: '2', Parent: '1', Score: 3} },
            { data: { Title: 'Bet', Level: '2', Parent: '1', Score: 7} },
            { data: { Title: 'Lines', Level: '2', Parent: '1', Score: 2} },
            { data: { Title: 'Spin', Level: '2', Parent: '1', Score: 5} },
            { data: { Title: 'Auto Spin', Level: '2', Parent: '1', Score: 5} },
            { data: { Title: 'Mini', Level: '2', Parent: '1', Score: 3} },
            { data: { Title: 'Minor', Level: '2', Parent: '1', Score: 5} },
            { data: { Title: 'Major', Level: '2', Parent: '1', Score: 5} },
            { data: { Title: 'Mega', Level: '2', Parent: '1', Score: 5} },
            { data: { Title: 'Random', Level: '2', Parent: '1', Score: 5} },
            { data: { Title: 'Ultimate', Level: '2', Parent: '1', Score: 5} },
            { data: { Title: 'Wild', Level: '2', Parent: '1', Score: 7} },
            { data: { Title: 'Free Spin', Level: '2', Parent: '1', Score: 7} },
            { data: { Title: 'Scatter', Level: '2', Parent: '1', Score: 7} },
            { data: { Title: 'Lucky Draw', Level: '2', Parent: '1', Score: 6} },
            { data: { Title: 'Bank Account', Level: '2', Parent: '1', Score: 3} },
            { data: { Title: 'Payment Gateway', Level: '2', Parent: '1', Score: 3} },
            { data: { Title: '24 / 7', Level: '2', Parent: '1', Score: 5} },

          ]
        },
      ],
    },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}

@Component({
  selector: 'ngx-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
      <nb-icon icon="file-text-outline"></nb-icon>
    </ng-template>
  `,
})
export class FsIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }
}
