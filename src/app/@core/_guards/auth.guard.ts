import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    // private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      let valid: boolean =  false;
      // const roles = route.data['roles'] as Array<string>;

      const id_token = window.localStorage.getItem('id_token').split('.');
      const payload = JSON.parse(atob(id_token[1]));

      if (payload && payload.role) {

        for ( let i = 0; i < payload.role.length; i++) {

            if ( payload.role[i] === 'ADMIN_CAMPUS') {
                valid = true;
                break;
            }
        }
      }

      /*if (!valid) {
        // not logged in so redirect to login page with the return url
        // or not exist role return url
        this.router.navigate(['/']);
      }*/
      return valid;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.canActivate(route, state);
  }

}
