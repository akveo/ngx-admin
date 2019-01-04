import { Component } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { filter } from 'rxjs/operators/filter';

@Component({
  selector: 'thing-context-menu',
  template: `
    <nb-layout>
      <nb-layout-column>
        <button [nbContextMenu]="userMenu" [nbContextMenuTag]="tag">things actions</button>
      </nb-layout-column>
    </nb-layout>
  `,
})
export class ContextMenuComponent  {
  userMenu = [ { title: 'Connect Channel' }, { title: 'Disconnect Channel' } , { title: 'Import CSV' }, { title: 'Export CSV' }];
  tag = 'thing-context-menu';

  constructor(private menuService: NbMenuService) {
    menuService.onItemClick()
      .pipe(filter(({ tag }) => tag === this.tag))
      .subscribe(bag => console.log(bag));
  }
}
