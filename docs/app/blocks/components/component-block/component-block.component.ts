import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgxTabbedService } from '../../../@theme/services/tabbed.service';

@Component({
  selector: 'ngx-component-block',
  template: `
    <nb-card [ngxFragment]="source.slag">
      <nb-card-body>
        <ng-container class="description" *ngFor="let node of overview">
          <ng-container *ngIf="node.type === 'text'">
            <div *ngFor="let section of node.content" [innerHtml]="section.html"></div>
          </ng-container>
          <ngx-live-example-block *ngIf="node.type === 'live-example'" [id]="node.content" [title]="'example'"
                                  class="widget-block">
          </ngx-live-example-block>
          <ngx-inline-example-block *ngIf="node.type === 'inline-example'" [content]="node.content"
                                    class="widget-block">
          </ngx-inline-example-block>
          <ngx-stacked-example-block *ngIf="node.type === 'example'" [content]="node.content"
                                     class="widget-block">
          </ngx-stacked-example-block>
        </ng-container>
        <ngx-props-block [source]="source" *ngIf="hasProps(source)"></ngx-props-block>
        <ngx-methods-block [source]="source" *ngIf="hasMethods(source)"></ngx-methods-block>
        <ng-container *ngIf="hasTheme(source)">
          <h3>Theme</h3>
          <ngx-styles-table-block [source]="source"></ngx-styles-table-block>
        </ng-container>
      </nb-card-body>
    </nb-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxComponentBlockComponent {

  source: any;
  overview: any[] = [];

  @Input('source')
  set setSource(source: any) {
    this.source = source;
    this.overview = source.overview;
  }

  constructor(private tabbedService: NgxTabbedService) {
  }

  hasTheme(component) {
    return this.tabbedService.componentHasTheme(component);
  }

  hasMethods(component) {
    return this.tabbedService.componentHasMethods(component);
  }

  hasProps(component) {
    return this.tabbedService.componentHasProps(component);
  }
}
