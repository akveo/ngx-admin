import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(activeRoute: ActivatedRouteSnapshot) {
    if (activeRoute.data && activeRoute.data['permissions']){
      var pass = false;
      // Your validate code here
      console.log('Require permissions');
      console.log(activeRoute.data['permissions']);

      if (pass){
        return true;
      }
    }

    this._router.navigate(['/login']);
    return false;
  }
}
