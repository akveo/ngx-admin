import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticationService } from '../services/auth/authentication.service';
import { TokenStorage } from '../services/auth/token-storage.service';
import { ChannelsService } from '../services/channels/channels.service';
import { ThingsService } from '../services/things/things.service';
import { UiStore } from './ui.store';

describe('State', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                UiStore,
                UiStore,
                TokenStorage,
                AuthenticationService,
                ThingsService,
                ChannelsService,
            ]
        });
    });

    it('should be created', inject([UiStore], (uiStore: UiStore) => {
        expect(uiStore).toBeTruthy();
    }));

    describe('goToSignup', () => {
        it('should navigate to /signup', inject([UiStore, Router],
            (uiStore: UiStore, router: Router) => {
                const routerSpy = spyOn(router, 'navigate').and.stub();

                uiStore.goToSignup();

                expect(routerSpy).toHaveBeenCalledWith(['/signup']);
            }));
    });

    describe('goToLogin', () => {
        it('should navigate to /login', inject([UiStore, Router],
            (uiStore: UiStore, router: Router) => {
                const routerSpy = spyOn(router, 'navigate').and.stub();

                uiStore.goToLogin();

                expect(routerSpy).toHaveBeenCalledWith(['/login']);
            }));
    });
});


