import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ba-menu-item',
  templateUrl: './baMenuItem.html',
  styleUrls: ['./baMenuItem.scss'],
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

  private checkChildrenView(): boolean {
    if (this.menuItem.children) {
      for (let childrenItem of this.menuItem.children) {
        if (!childrenItem.hidden) {
          return true;
        }
      }
    }
    return false;
  }
}
