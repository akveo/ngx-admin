import { Component, OnInit, AfterViewInit, Renderer } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { TreeNode,DropdownModule } from 'primeng/primeng';
import { MenuService } from '../../../shared/service/menu.service'
import { User, UserService } from '../../../shared/service/user.service'
import { Message } from 'primeng/primeng';

@Component({

  template: `
    <div class="row">
      <div class="col-md-4">
        <p-tree expanded="true" [value]="menus" selectionMode="multiple" [(selection)]="selectedMenus"
          (onNodeSelect)="nodeSelect($event)" (onNodeUnselect)="nodeUnselect($event)">
        </p-tree>
      </div>
      <div class="col-md-8">
          <div class="row">
            <button class="btn btn-primary" (click)="editUserMenu()">提交</button>
          </div>
          <div class="row">
            <p-dropdown [options]="users" [(ngModel)]="selectedUser" [filter]="true" [autoWidth]=true [style]="{'width':'150px'}" (onChange)="onUserChange($event)"></p-dropdown>
          </div>
      </div>
    </div>
    <p-growl name="message" [value]="msgs"></p-growl>
  `,
  styles: [
    `
    `
  ]
})
export class EditUserMenuComponent implements OnInit {

  private menus:TreeNode[];

  private selectedMenus:TreeNode[] = [];

  private selectedUser:string;

  private users:User[];

  private msgs:Message[] = [];

  constructor(private menuService:MenuService, private userService:UserService, private renderer:Renderer) {
  }

  ngOnInit():void {

    this.userService.listAllUsers().subscribe(
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
        this.refreshMenuTree();
      }
    );
  }

  private refreshMenuTree():void {

    this.menuService.listPrimengMenus(this.selectedUser).subscribe(
      (menus) => {
        this.menus = menus;
        this.updateSelected(menus);
        this.expandTreeMenus();
      }
    );
  }

  private onUserChange(event:any):void {
    this.refreshMenuTree();
  }

  private updateSelected(menus:TreeNode[]):void {

    menus.forEach(menu => {
      if (menu.selected) {
        this.selectedMenus.push(menu);
      }
      this.updateSelected(menu.children);
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

  private editUserMenu():void {

    let menuIds = this.selectedMenus.map((menu:TreeNode) => {
      return menu.data;
    });

    this.userService.editUserMenu(this.selectedUser, menuIds).subscribe(
      () => {
        this.msgs.push({severity: 'info', summary: '保存成功', detail: ''});
        this.user = new User();
      },
      error => {
        this.msgs.push({severity: 'error', summary: '保存失败', detail: error.statusText});
      }
    );
  }


  private nodeSelect(event:any) {
  }

  private nodeUnselect(event:any) {

    console.log(this.selectedMenus)
  }

}
