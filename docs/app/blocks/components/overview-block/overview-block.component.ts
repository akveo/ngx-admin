import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-overview-block',
  template: `
    <nb-card [ngxFragment]="source.slag">
      <nb-card-body>
        <ng-container class="description" *ngFor="let node of overview">
          <ng-container *ngIf="node.type === 'text'">
            <div *ngFor="let section of node.content" [innerHtml]="section.html"></div>
          </ng-container>
          <ngx-live-example-block *ngIf="node.type === 'live-example'" [content]="node.content"
                                  class="widget-block">
          </ngx-live-example-block>
          <ngx-inline-example-block *ngIf="node.type === 'inline-example'" [content]="node.content"
                                    class="widget-block">
          </ngx-inline-example-block>
          <ngx-stacked-example-block *ngIf="node.type === 'stacked-example'" [content]="node.content"
                                     class="widget-block">
          </ngx-stacked-example-block>
        </ng-container>
      </nb-card-body>
    </nb-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxOverviewBlockComponent {

  source: any;
  overview: any[] = [];

  @Input('source')
  set setSource(source: any) {
    this.source = source;
    this.overview = source.overview;
  }
}
