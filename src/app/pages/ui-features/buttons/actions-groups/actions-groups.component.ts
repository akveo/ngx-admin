import { Component } from '@angular/core';

@Component({
  selector: 'ngx-actions-groups',
  templateUrl: './actions-groups.component.html',
})

export class ActionsGroupsComponent {

  userMenu = [
    {
      title: 'Profile',
    },
    {
      title: 'Log out',
    },
  ];
}
