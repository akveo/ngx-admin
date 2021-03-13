import { Injectable } from '@angular/core';
import { Observable, of as ObservableOf } from 'rxjs';
import { User } from 'thingbook-api';
import { LoginInterceptor } from '../../user.interceptors';

export { User };

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private user: User = undefined;

    constructor() {
        LoginInterceptor.s.subscribe({
            next: (v) => {
                this.user = v;
            }
        });
    }

    public onUserStatus(): Observable<User> {
        return ObservableOf(this.user);
    }
}

