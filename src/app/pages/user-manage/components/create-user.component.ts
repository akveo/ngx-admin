import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { User, UserService } from '../../../shared/service/user.service'
import { Message } from 'primeng/primeng';

@Component({

  template: `
    <div class="row">
        <div class="col-md-4 col-md-offset-3">
            <form>
              <div class="form-group">
                <label for="userId">账号</label>
                <div class="input-group">
                  <input name="userId" type="text" [(ngModel)]="user.id" class="form-control" id="userId" placeholder="dw账号">
                  <span class="input-group-addon input-group-addon-warning addon-right" id="basic-addon2">@yy.com</span>
                </div>
                <button type="submit" (click)="save()" class="btn btn-danger">Submit</button>
              </div>
            </form>
        </div>
    </div>
    <p-growl name="message" [value]="msgs"></p-growl>
  `
})
export class CreateUserComponent implements OnInit {

  msgs:Message[] = [];

  user:User = new User();

  constructor(private userService:UserService) {

  }

  ngOnInit():void {
  }

  save():void {
    this.userService.saveUser(this.user).subscribe(
      (user) => {
        this.msgs.push({severity: 'info', summary: '创建成功', detail: ''});
        this.user = new User();
      },
      error => {
        this.msgs.push({severity: 'error', summary: '创建失败', detail: error.statusText});
      }
    );
  }
}
