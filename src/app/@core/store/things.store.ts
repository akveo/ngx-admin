import { Injectable } from '@angular/core';
import { action, observable } from 'mobx';

import { ThingsService } from '../services/things/things.service';
import { Thing } from './models';
import { UiStore } from './ui.store';

@Injectable()
export class ThingsStore {
    @observable things: Thing[] = [];

    constructor(
        private uiState: UiStore,
        private thingsService: ThingsService,
    ) { }

    @action
    getThings() {
        this.uiState.loading = true;
        this.thingsService.getThings()
            .subscribe((payload: any) => {
                this.uiState.loading = false;
                this.things = payload.things;
            }, () => {
                this.uiState.loading = false;
            });
    }

    @action
    addThing(thing: Thing) {
        this.uiState.loading = true;
        this.thingsService.addThing(thing)
            .subscribe(() => {
                this.uiState.loading = false;
                this.getThings();
            }, () => {
                this.uiState.loading = false;
            });
    }

    @action
    editThing(thing: Thing) {
        this.uiState.loading = true;
        this.thingsService.editThing(thing)
            .subscribe(() => {
                this.uiState.loading = false;
                this.getThings();
            }, () => {
                this.uiState.loading = false;
            });
    }

    @action
    deleteThing(thing: Thing) {
        this.uiState.loading = true;
        this.thingsService.deleteThing(thing)
            .subscribe(() => {
                this.uiState.loading = false;
                this.getThings();
            }, () => {
                this.uiState.loading = false;
            });
    }
}
