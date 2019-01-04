import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { toJS } from 'mobx';
import { Observable } from 'rxjs/Observable';

import { ThingsService } from '../services/things/things.service';
import { ThingsStore } from './things.store';
import { Thing } from './models';
import { UiStore } from './ui.store';

describe('ThingsStore', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                ThingsStore,
                UiStore,
                ThingsService,
            ]
        });
    });

    it('should be created', inject([ThingsStore], (thingsStore: ThingsStore) => {
        expect(thingsStore).toBeTruthy();
    }));

    describe('getThings', () => {
        it('should set the loading flag to true before service call', inject([ThingsStore, UiStore, ThingsService],
            (thingsStore: ThingsStore, uiStore: UiStore, thingsService: ThingsService) => {
                const getThings = spyOn(thingsService, 'getThings').and.returnValue({ subscribe: () => { } });

                thingsStore.getThings();

                expect(uiStore.loading).toBeTruthy();
            }));

        it('should set the loading flag to false after successful get', inject([ThingsStore, UiStore, ThingsService],
            (thingsStore: ThingsStore, uiStore: UiStore, thingsService: ThingsService) => {
                const getThings = spyOn(thingsService, 'getThings').and.returnValue(Observable.of(true));

                thingsStore.getThings();

                expect(uiStore.loading).toBeFalsy();
            }));

        it('should set the things property to the returned things from the service', inject([ThingsStore, ThingsService],
            (thingsStore: ThingsStore, thingsService: ThingsService) => {
                const serviceReturnValue = { things: [] };
                const getChannels = spyOn(thingsService, 'getThings').and.returnValue(Observable.of(serviceReturnValue));

                thingsStore.getThings();

                expect(toJS(thingsStore.things)).toEqual(serviceReturnValue.things);
            }));

        it('should set the loading flag to false after failed get', inject([ThingsStore, UiStore, ThingsService],
            (thingsStore: ThingsStore, uiStore: UiStore, thingsService: ThingsService) => {
                const getThings = spyOn(thingsService, 'getThings').and.returnValue(Observable.throw(''));

                thingsStore.getThings();

                expect(uiStore.loading).toBeFalsy();
            }));
    });

    describe('addThing', () => {
        it('should set the loading flag to true before service call', inject([ThingsStore, UiStore, ThingsService],
            (thingsStore: ThingsStore, uiStore: UiStore, thingsService: ThingsService) => {
                const addThing = spyOn(thingsService, 'addThing').and.returnValue({ subscribe: () => { } });
                const newThing: Thing = {
                    name: 'new thing',
                    type: 'app',
                    payload: '',
                };

                thingsStore.addThing(newThing);

                expect(uiStore.loading).toBeTruthy();
            }));

        it('should set the loading flag to false after successful service call', inject([ThingsStore, UiStore, ThingsService],
            (thingsStore: ThingsStore, uiStore: UiStore, thingsService: ThingsService) => {
                const addThing = spyOn(thingsService, 'addThing').and.returnValue(Observable.of(true));
                const storeGetThingsSpy = spyOn(thingsStore, 'getThings').and.stub();
                const newThing: Thing = {
                    name: 'new thing',
                    type: 'app',
                    payload: '',
                };

                thingsStore.addThing(newThing);

                expect(uiStore.loading).toBeFalsy();
            }));

        it('should call the thingsStore.getThings after successful add', inject([ThingsStore, ThingsService],
            (thingsStore: ThingsStore, thingsService: ThingsService) => {
                const addThing = spyOn(thingsService, 'addThing').and.returnValue(Observable.of(true));
                const storeGetThingsSpy = spyOn(thingsStore, 'getThings').and.stub();
                const newThing: Thing = {
                    name: 'new thing',
                    type: 'app',
                    payload: '',
                };

                thingsStore.addThing(newThing);

                expect(storeGetThingsSpy).toHaveBeenCalled();
            }));

        it('should set the loading flag to false after failed add', inject([ThingsStore, UiStore, ThingsService],
            (thingsStore: ThingsStore, uiStore: UiStore, thingsService: ThingsService) => {
                const addThing = spyOn(thingsService, 'addThing').and.returnValue(Observable.throw(''));
                const storeGetThingsSpy = spyOn(thingsStore, 'getThings').and.stub();

                const newThing: Thing = {
                    name: 'new thing',
                    type: 'app',
                    payload: '',
                };

                thingsStore.addThing(newThing);

                expect(uiStore.loading).toBeFalsy();
            }));
    });

    describe('editThing', () => {
        it('should set the loading flag to true before service call', inject([ThingsStore, UiStore, ThingsService],
            (thingsStore: ThingsStore, uiStore: UiStore, thingsService: ThingsService) => {
                const editThing = spyOn(thingsService, 'editThing').and.returnValue({ subscribe: () => { } });
                const editedThing: Thing = {
                    name: 'edited thing',
                    type: 'app',
                    payload: '',
                };

                thingsStore.editThing(editedThing);

                expect(uiStore.loading).toBeTruthy();
            }));

        it('should set the loading flag to false after successful service call', inject([ThingsStore, UiStore, ThingsService],
            (thingsStore: ThingsStore, uiStore: UiStore, thingsService: ThingsService) => {
                const editThing = spyOn(thingsService, 'editThing').and.returnValue(Observable.of(true));
                const storeGetThingsSpy = spyOn(thingsStore, 'getThings').and.stub();
                const editedThing: Thing = {
                    name: 'edited thing',
                    type: 'app',
                    payload: '',
                };

                thingsStore.editThing(editedThing);

                expect(uiStore.loading).toBeFalsy();
            }));

        it('should call the thingsStore.getChannels after successful edit', inject([ThingsStore, UiStore, ThingsService],
            (thingsStore: ThingsStore, uiStore: UiStore, thingsService: ThingsService) => {
                const editThing = spyOn(thingsService, 'editThing').and.returnValue(Observable.of(true));
                const storeGetThingsSpy = spyOn(thingsStore, 'getThings').and.stub();

                const editedThing: Thing = {
                    name: 'edited thing',
                    type: 'app',
                    payload: '',
                };

                thingsStore.editThing(editedThing);

                expect(storeGetThingsSpy).toHaveBeenCalled();
            }));

        it('should set the loading flag to false after failed edit', inject([ThingsStore, UiStore, ThingsService],
            (thingsStore: ThingsStore, uiStore: UiStore, thingsService: ThingsService) => {
                const editThing = spyOn(thingsService, 'editThing').and.returnValue(Observable.throw(''));
                const storeGetThingsSpy = spyOn(thingsStore, 'getThings').and.stub();
                const editedThing: Thing = {
                    name: 'edited thing',
                    type: 'app',
                    payload: '',
                };

                thingsStore.editThing(editedThing);

                expect(uiStore.loading).toBeFalsy();
            }));
    });

    describe('deleteThing', () => {
        it('should set the loading flag to true before service call', inject([ThingsStore, UiStore, ThingsService],
            (thingsStore: ThingsStore, uiStore: UiStore, thingsService: ThingsService) => {
                const deleteThing = spyOn(thingsService, 'deleteThing').and.returnValue({ subscribe: () => { } });
                const thingToBeDeleted: Thing = {
                    name: 'thingToBeDeleted',
                    type: 'app',
                    payload: ''
                };

                thingsStore.deleteThing(thingToBeDeleted);

                expect(uiStore.loading).toBeTruthy();
            }));

        it('should set the loading flag to false after successful service call', inject([ThingsStore, UiStore, ThingsService],
            (thingsStore: ThingsStore, uiStore: UiStore, thingsService: ThingsService) => {
                const deleteThing = spyOn(thingsService, 'deleteThing').and.returnValue(Observable.of(true));
                const storeGetThingsSpy = spyOn(thingsStore, 'getThings').and.stub();
                const thingToBeDeleted: Thing = {
                    name: 'thingToBeDeleted',
                    type: 'app',
                    payload: ''
                };


                thingsStore.deleteThing(thingToBeDeleted);

                expect(uiStore.loading).toBeFalsy();
            }));

        it('should call the thingsStore.getChannels after successful add', inject([ThingsStore, ThingsService],
            (thingsStore: ThingsStore, thingsService: ThingsService) => {
                const deleteThing = spyOn(thingsService, 'deleteThing').and.returnValue(Observable.of(true));
                const storeGetThingsSpy = spyOn(thingsStore, 'getThings').and.stub();

                const thingToBeDeleted: Thing = {
                    name: 'thingToBeDeleted',
                    type: 'app',
                    payload: ''
                };

                thingsStore.deleteThing(thingToBeDeleted);

                expect(storeGetThingsSpy).toHaveBeenCalled();
            }));

        it('should set the loading flag to false after failed delete', inject([ThingsStore, UiStore, ThingsService],
            (thingsStore: ThingsStore, uiStore: UiStore, thingsService: ThingsService) => {
                const deleteThing = spyOn(thingsService, 'deleteThing').and.returnValue(Observable.throw(''));
                const storeGetThingsSpy = spyOn(thingsStore, 'getThings').and.stub();
                const thingToBeDeleted: Thing = {
                    name: 'thingToBeDeleted',
                    type: 'app',
                    payload: ''
                };

                thingsStore.deleteThing(thingToBeDeleted);

                expect(uiStore.loading).toBeFalsy();
            }));
    });
});
