import { Component, ViewEncapsulation, OnInit, Renderer } from '@angular/core';
import { MenuService } from '../../shared/service/menu.service'
import { User, UserService } from '../../shared/service/user.service'

@Component({
  selector: 'home',
  styles: [require('./home.scss')],
  template: require('./home.html')
})
export class HomeComponent implements OnInit {

  private menus:TreeNode[];

  constructor(private menuService:MenuService, private userService:UserService, private renderer:Renderer) {
  }

  ngOnInit():void {
    this.userService.getUserInfo().subscribe((user:User) => {
      this.menuService.listPrimengMenus(user.id).subscribe(
        (menus) => {
          this.menus = menus;
          this.expandTreeMenus();
        }
      );
    });
  }

  private expandTreeMenus():void {
    setTimeout(() => { // a timeout is necessary otherwise won't find the elements

      // get the first "p-tree" tag and find his first "toggler"
      Array.from(document.getElementsByTagName("p-tree")[0].getElementsByClassName("ui-tree-toggler fa fa-fw fa-caret-right")).forEach(
        menu => {
          let event = new MouseEvent('click', {bubbles: true});
          this.renderer.invokeElementMethod(menu, 'dispatchEvent', [event]);
        }
      );
    }, 500);
  }
}
