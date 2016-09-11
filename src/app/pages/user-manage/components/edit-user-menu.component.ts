import { Component, OnInit, AfterViewInit, Renderer } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { TreeNode,DropdownModule } from 'primeng/primeng';
import { MenuService } from '../../../shared/service/menu.service'
import { User, UserManageService } from '../common/user-manage.service'

@Component({

  template: `
    <div class="row">
      <div class="col-md-4">
          <p-tree expanded="true" [value]="menus" selectionMode="multiple" [(selection)]="selectedMenus"
            (onNodeSelect)="nodeSelect($event)" (onNodeUnselect)="nodeUnselect($event)">
          </p-tree>
      </div>
      <!--<div class="col-md-8">-->
        <p-dropdown [options]="users" [(ngModel)]="selectedUser" [filter]="true" [autoWidth]=true [style]="{'width':'150px'}"></p-dropdown>
         <p>Selected Car: {{selectedUser||'none'}}</p>
      <!--</div>-->
    </div>
  `,
  styles: [
    `
    `
  ]
})
export class EditUserMenuComponent implements OnInit, AfterViewInit {

  private menus:TreeNode[];

  private selectedMenus:any[] = [];

  private selectedUser:string;

  private users:User[];

  constructor(private _menuService:MenuService, private _userManageService:UserManageService, private renderer:Renderer) {
  }

  ngOnInit():void {

    this._menuService.listPrimengMenus().subscribe(
      (menus) => {
        this.menus = menus;
        this.defaultAllExpand(menus);
      }
    );

    this._userManageService.listAllUsers().subscribe(
      (users:User[]) => {

        this.users = users.map((user:User) => {
          return {
            label: user.id,
            value: user.id
          };
        });

        if (users && users.length > 0) {
          this.selectedUser = users[0].id;
        }
      }
    );

  }

  private defaultAllExpand(menus:TreeNode[]):void {

    menus.forEach(menu => {
      if (menu.selected) {
        this.selectedMenus.push(menu);
      }
      this.defaultAllExpand(menu.children);
    });
  }


  ngAfterViewInit() {
    setTimeout(() => { // a timeout is necessary otherwise won't find the elements

      // get the first "p-tree" tag and find his first "toggler"
      Array.from(document.getElementsByTagName("p-tree")[0].getElementsByClassName("ui-tree-toggler fa fa-fw fa-caret-right")).forEach(
        menu => {
          let event = new MouseEvent('click', {bubbles: true});
          this.renderer.invokeElementMethod(menu, 'dispatchEvent', [event]);
        }
      );
    }, 2000);
  }


  private nodeSelect(event:any) {
  }

  private nodeUnselect(event:any) {

    console.log(this.selectedMenus)
  }

}
