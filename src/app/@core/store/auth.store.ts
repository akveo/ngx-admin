import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { action, observable } from 'mobx';

import { AuthenticationService } from '../services/auth/authentication.service';
import { User } from './models';
import { UiStore } from './ui.store';

@Injectable()
export class AuthStore {
    @observable isAuthenticated = false;
    @observable authError = '';

    constructor(
        private authenticationService: AuthenticationService,
        private uiState: UiStore,
        private router: Router,
    ) {
        this.authenticationService.isAuthorized().subscribe(
            (isAuthenticated) => {
                this.isAuthenticated = isAuthenticated;
            }
        );
    }

    @action
    login(user: User) {
        this.uiState.loading = true;

        this.authenticationService.login(user)
            .subscribe(() => {
                this.uiState.loading = false;
                this.isAuthenticated = true;
                this.router.navigate(['/things']);
            },
            (error) => {
                this.uiState.loading = false;
                this.authError = error;
            }
            );
    }

    @action
    signup(user: User) {
        this.uiState.loading = true;

        this.authenticationService.signup(user)
            .subscribe(() => {
                this.login(user);
            },
            (error) => {
                this.uiState.loading = false;
                this.authError = error;
            });
    }

    @action
    logout() {
        this.authenticationService.logout();
        this.isAuthenticated = false;
        this.router.navigate(['/login']);
    }
}
