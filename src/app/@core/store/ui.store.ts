import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { action, observable } from 'mobx';

@Injectable()
export class UiStore {
    @observable loading = false;

    constructor(
        private router: Router
    ) { }


    @action
    goToSignup() {
        this.router.navigate(['/signup']);
    }

    @action
    goToLogin() {
        this.router.navigate(['/login']);
    }
}
