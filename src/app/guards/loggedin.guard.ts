import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private profile:ProfileService) { }

    canActivate():Observable<boolean> {
        return this
            .profile
            .isLoggedIn()
            .map(loggedIn => {
                if(!loggedIn) {
                    this.router.navigate(['/login']);
                    return false;
                }
                return true;
                });

    }
}
