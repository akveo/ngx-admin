
import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';

class User {
  name: string;
  picture: string;
}

class Contacts {
  user: User;
  type: string;
}

class RecentUsers extends Contacts {
  time: string;
}

@Injectable()
export class UserService {

  private users = {
    nick: { name: 'Nick Jones', picture: 'assets/images/nick.png' },
    eva: { name: 'Eva Moor', picture: 'assets/images/eva.png' },
    jack: { name: 'Jack Williams', picture: 'assets/images/jack.png' },
    lee: { name: 'Lee Wong', picture: 'assets/images/lee.png' },
    alan: { name: 'Alan Thompson', picture: 'assets/images/alan.png' },
    kate: { name: 'Kate Martinez', picture: 'assets/images/kate.png' },
  };
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };
  private contacts: Contacts[] = [
    { user: this.users.nick, type: this.types.mobile },
    { user: this.users.eva, type: this.types.home },
    { user: this.users.jack, type: this.types.mobile },
    { user: this.users.lee, type: this.types.mobile },
    { user: this.users.alan, type: this.types.home },
    { user: this.users.kate, type: this.types.work },
  ];
  private recentUsers: RecentUsers[]  = [
    { user: this.users.alan, type: this.types.home, time: '9:12 pm'},
    { user: this.users.eva, type: this.types.home, time: '7:45 pm'},
    { user: this.users.nick, type: this.types.mobile, time: '5:29 pm'},
    { user: this.users.lee, type: this.types.mobile, time: '11:24 am'},
    { user: this.users.jack, type: this.types.mobile, time: '10:45 am'},
    { user: this.users.kate, type: this.types.work, time: '9:42 am'},
    { user: this.users.kate, type: this.types.work, time: '9:31 am'},
    { user: this.users.jack, type: this.types.mobile, time: '8:00 am'},
  ];

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }
}
