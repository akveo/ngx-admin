import { Component } from '@angular/core';

import { UserService } from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-contacts',
  styleUrls: ['./contacts.component.scss'],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent {
  contacts: any[];

  constructor(private userService: UserService) {
    const users = this.userService.getUsers();

    this.contacts = [
      { user: users.nick, type: 'mobile' },
      { user: users.eva, type: 'home' },
      { user: users.jack, type: 'mobile' },
      { user: users.lee, type: 'mobile' },
      { user: users.alan, type: 'home' },
      { user: users.kate, type: 'work' },
    ];
  }
}
