import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Observer }  from 'rxjs/Observer';
import { Response } from '@angular/http';

@Injectable()
export class ProfileService {
    public profile;
    loggedIn: boolean;
    status: Observable<boolean>;
    private observer: Observer<boolean>;

    constructor(private api:ApiService) {
        this.status = new Observable<boolean>(observer =>
            this.observer = observer
        );
    }

    changeState(newState:boolean) {
        if(this.observer !== undefined) this.observer.next(newState);

    }

    isLoggedIn() {
        let ssid = localStorage.getItem('ssid');
        if(!ssid) {
            this.changeState(false);
            return Observable.fromPromise(Promise.resolve(false));
        }
        this.api.setToken(ssid);
        return this
            .api // <- you can amend that for you API
            .get('profile/me')
            .map(response => {
            this.profile = response;
            this.loggedIn = true;
            this.changeState(true);
            return true;
        });
    }

    login(username, password): Observable<boolean> {
        return this
            .api // <- you can amend that for you API
            .post('auth/login', {
                id: username,
                provider: 'email',
                secret: password
            })
            .flatMap(data => {
            this.api.setToken(data);
            return this.isLoggedIn();
        });
    }

    logout(): void {
    }
}
