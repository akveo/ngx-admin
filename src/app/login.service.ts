import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer }  from 'rxjs/Observer';

@Injectable()
export class LoginService {
    loggedIn: boolean;
    status: Observable<boolean>;
    private observer: Observer<boolean>;

    constructor() {
        this.status = new Observable<boolean>(observer =>
            this.observer = observer
        ).share();
    }

    changeState(newState:boolean) {
        if(this.observer !== undefined) this.observer.next(newState);
    }
}
