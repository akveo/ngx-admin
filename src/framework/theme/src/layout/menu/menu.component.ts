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
  target?: string;
  hidden?: boolean = false;
}

@Component({
  selector: 'nga-menu-item',
  template: `
    <li [ngClass]="{ 'active': menuItem.selected && !menuItem.expanded }"
        [title]="menuItem.title"
        *ngIf="!menuItem.hidden">
      <a href *ngIf="!menuItem.children" 
              [href]="menuItem.url" 
              [target]="menuItem.target"
              (mouseenter)="onHoverItem(menuItem)">
        <i class="{{ menuItem.icon }}" *ngIf="menuItem.icon"></i>
        <span>{{ menuItem.title }}</span>      
      </a>
      <a href *ngIf="menuItem.children"
              (click)="$event.preventDefault();onToogleSubMenu(menuItem)"
              [target]="menuItem.target"
              (mouseenter)="onHoverItem(menuItem)">
        <i class="{{ menuItem.icon }}" *ngIf="menuItem.icon"></i>
        <span>{{ menuItem.title }}</span>
        <i class="ion" [ngClass]="{ 'ion-chevron-down': !menuItem.expanded, 
                                    'ion-chevron-up': menuItem.expanded }"></i>
      </a>
      <ul [ngClass]="{ 'menu-hidden': !(menuItem.children && menuItem.expanded), 
                       'menu-visible': menuItem.expanded }">
        <nga-menu-item [menuItem]="item" *ngFor="let item of menuItem.children" 
                       (hoverItem)="onHoverItem($event)" 
                       (toogleSubMenu)="onToogleSubMenu($event)"></nga-menu-item>
      </ul>
    </li>
  `,
})
export class NgaMenuItemComponent {

  @Input() menuItem: NgaMenuItem;

  @Output() hoverItem = new EventEmitter<any>();
  @Output() toogleSubMenu = new EventEmitter<any>();

  onToogleSubMenu(menuItem: NgaMenuItem) {
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

  onHoverItem(menuItem: NgaMenuItem) {
    this.hoverItem.emit(menuItem);
  }

  onToogleSubMenu(menuItem: NgaMenuItem) {
    menuItem.expanded = !menuItem.expanded;

    this.toogleSubMenu.emit(menuItem);
  }

}
