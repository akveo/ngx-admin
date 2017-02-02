import { Component, EventEmitter, Input, Output } from '@angular/core';

import 'style-loader!./ba-menu-item.component.scss';

@Component({
  selector: 'ba-menu-item',
  templateUrl: './ba-menu-item.component.html'
})
export class BaMenuItem {

  @Input() menuItem: any;
  @Input() child: boolean = false;

  @Output() itemHover = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();

  public onHoverItem($event): void {
    this.itemHover.emit($event);
  }

  public onToggleSubMenu($event, item): boolean {
    $event.item = item;
    this.toggleSubMenu.emit($event);
    return false;
  }
}
