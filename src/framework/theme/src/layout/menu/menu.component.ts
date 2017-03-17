import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

export class NgaMenuItem {
  title: string;
  url?: string;
  icon?: string;
  expanded?: boolean = false;
  selected?: boolean = false;
  children?: Array<NgaMenuItem>;
}

@Component({
  selector: 'nga-menu-item',
  template: `
    <li [ngClass]="{ 'active': menuItem.selected && !menuItem.expanded }">
      <a href [hidden]="menuItem.children" 
              [href]="menuItem.url" 
              (mouseenter)="onHoverItem(menuItem)">
        <i class="{{ menuItem.icon }}" *ngIf="menuItem.icon"></i>
        <span>{{ menuItem.title }}</span>      
      </a>
      <a href *ngIf="menuItem.children"
              (click)="onToogleSubMenu($event, menuItem)"
              (mouseenter)="onHoverItem(menuItem)">
        <i class="{{ menuItem.icon }}" *ngIf="menuItem.icon"></i>
        <span>{{ menuItem.title }}</span>
        <i class="ion" [ngClass]="{ 'ion-chevron-down': !menuItem.expanded, 
                                    'ion-chevron-up': menuItem.expanded }"></i>
      </a>
      <nga-menu [menuItems]="menuItem.children" 
                *ngIf="menuItem.children && menuItem.expanded" 
                [ngClass]="{ 'submenu-hidden': !menuItem.expanded }"></nga-menu>
    </li>
  `,
})
export class NgaMenuItemComponent {

  @Input() menuItem: NgaMenuItem;

  @Output() hoverItem = new EventEmitter<any>();
  @Output() toogleSubMenu = new EventEmitter<any>();

  onToogleSubMenu($event, menuItem: NgaMenuItem) {
    $event.preventDefault();

    menuItem.expanded = !menuItem.expanded;

    this.toogleSubMenu.emit(menuItem);
  }

  onHoverItem(menuItem: NgaMenuItem) {
    this.hoverItem.emit(menuItem);
  }

}

@Component({
  selector: 'nga-menu',
  styleUrls: ['./menu.component.scss'],
  template: `
    <ul>
      <nga-menu-item *ngFor="let item of menuItems"
                     [menuItem]="item"
                     (hoverItem)="onHoverItem($event)"
                     (toogleSubMenu)="onToogleSubMenu($event)"></nga-menu-item>
    </ul>
  `,
})
export class NgaMenuComponent {

  @Input() menuItems: Array<NgaMenuItem>;

  @Output() hoverItem = new EventEmitter<any>();
  @Output() toogleSubMenu = new EventEmitter<any>();

  onHoverItem($event) {
    this.hoverItem = $event;
  }

  onToogleSubMenu($event) {
    this.toogleSubMenu = $event;
  }

}
