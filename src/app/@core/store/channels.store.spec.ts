import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { toJS } from 'mobx';
import { Observable } from 'rxjs/Observable';

import { ChannelsService } from '../services/channels/channels.service';
import { ChannelsStore } from './channels.store';
import { Channel } from './models';
import { UiStore } from './ui.store';

describe('ChannelsStore', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                ChannelsStore,
                UiStore,
                ChannelsService,
            ]
        });
    });

    it('should be created', inject([ChannelsStore], (channelsStore: ChannelsStore) => {
        expect(channelsStore).toBeTruthy();
    }));

    describe('getChannels', () => {
        it('should set the loading flag to true before service call', inject([ChannelsStore, UiStore, ChannelsService],
            (channelsStore: ChannelsStore, uiStore: UiStore, channelsService: ChannelsService) => {
                const getChannels = spyOn(channelsService, 'getChannels').and.returnValue({ subscribe: () => { } });

                channelsStore.getChannels();

                expect(uiStore.loading).toBeTruthy();
            }));

        it('should set the loading flag to false after successful get', inject([ChannelsStore, UiStore, ChannelsService],
            (channelsStore: ChannelsStore, uiStore: UiStore, channelsService: ChannelsService) => {
                const getChannels = spyOn(channelsService, 'getChannels').and.returnValue(Observable.of(true));

                channelsStore.getChannels();

                expect(uiStore.loading).toBeFalsy();
            }));

        it('should set the channels property to the returned channels from the service', inject([ChannelsStore, ChannelsService],
            (channelsStore: ChannelsStore, channelsService: ChannelsService) => {
                const serviceReturnValue = [];
                const getChannels = spyOn(channelsService, 'getChannels').and.returnValue(Observable.of(serviceReturnValue));

                channelsStore.getChannels();

                expect(toJS(channelsStore.channels)).toEqual(serviceReturnValue);
            }));

        it('should set the loading flag to false after failed get', inject([ChannelsStore, UiStore, ChannelsService],
            (channelsStore: ChannelsStore, uiStore: UiStore, channelsService: ChannelsService) => {
                const getChannels = spyOn(channelsService, 'getChannels').and.returnValue(Observable.throw(''));

                channelsStore.getChannels();

                expect(uiStore.loading).toBeFalsy();
            }));
    });

    describe('addChannel', () => {
        it('should set the loading flag to true before service call', inject([ChannelsStore, UiStore, ChannelsService],
            (channelsStore: ChannelsStore, uiStore: UiStore, channelsService: ChannelsService) => {
                const addChannel = spyOn(channelsService, 'addChannel').and.returnValue({ subscribe: () => { } });
                const newChannel: Channel = {
                    name: 'new channel',
                    connected: [],
                };

                channelsStore.addChannel(newChannel);

                expect(uiStore.loading).toBeTruthy();
            }));

        it('should set the loading flag to false after successful service call', inject([ChannelsStore, UiStore, ChannelsService],
            (channelsStore: ChannelsStore, uiStore: UiStore, channelsService: ChannelsService) => {
                const addChannel = spyOn(channelsService, 'addChannel').and.returnValue(Observable.of(true));
                const storeGetChannelsSpy = spyOn(channelsStore, 'getChannels').and.stub();
                const newChannel: Channel = {
                    name: 'new channel',
                    connected: [],
                };

                channelsStore.addChannel(newChannel);

                expect(uiStore.loading).toBeFalsy();
            }));

        it('should set the loading flag to false after failed service call', inject([ChannelsStore, UiStore, ChannelsService],
            (channelsStore: ChannelsStore, uiStore: UiStore, channelsService: ChannelsService) => {
                const addChannel = spyOn(channelsService, 'addChannel').and.returnValue(Observable.throw(''));
                const storeGetChannelsSpy = spyOn(channelsStore, 'getChannels').and.stub();
                const newChannel: Channel = {
                    name: 'new channel',
                    connected: [],
                };

                channelsStore.addChannel(newChannel);

                expect(uiStore.loading).toBeFalsy();
            }));

        it('should call the channelsStore.getChannels after successful add', inject([ChannelsStore, ChannelsService],
            (channelsStore: ChannelsStore, channelsService: ChannelsService) => {
                const addChannel = spyOn(channelsService, 'addChannel').and.returnValue(Observable.of(true));
                const storeGetChannelsSpy = spyOn(channelsStore, 'getChannels').and.stub();

                const newChannel: Channel = {
                    name: 'new channel',
                    connected: [],
                };

                channelsStore.addChannel(newChannel);

                expect(storeGetChannelsSpy).toHaveBeenCalled();
            }));
    });

    describe('editChannel', () => {
        it('should set the loading flag to true before service call', inject([ChannelsStore, UiStore, ChannelsService],
            (channelsStore: ChannelsStore, uiStore: UiStore, channelsService: ChannelsService) => {
                const addChannel = spyOn(channelsService, 'editChannel').and.returnValue({ subscribe: () => { } });
                const editedChannel: Channel = {
                    name: 'edited channel',
                    connected: [],
                };

                channelsStore.editChannel(editedChannel);

                expect(uiStore.loading).toBeTruthy();
            }));

        it('should set the loading flag to false after successful service call', inject([ChannelsStore, UiStore, ChannelsService],
            (channelsStore: ChannelsStore, uiStore: UiStore, channelsService: ChannelsService) => {
                const editChannel = spyOn(channelsService, 'editChannel').and.returnValue(Observable.of(true));
                const storeGetChannelsSpy = spyOn(channelsStore, 'getChannels').and.stub();
                const editedChannel: Channel = {
                    name: 'edited channel',
                    connected: [],
                };


                channelsStore.editChannel(editedChannel);

                expect(uiStore.loading).toBeFalsy();
            }));

        it('should set the loading flag to false after failed service call', inject([ChannelsStore, UiStore, ChannelsService],
            (channelsStore: ChannelsStore, uiStore: UiStore, channelsService: ChannelsService) => {
                const editChannel = spyOn(channelsService, 'editChannel').and.returnValue(Observable.throw(''));
                const storeGetChannelsSpy = spyOn(channelsStore, 'getChannels').and.stub();
                const editedChannel: Channel = {
                    name: 'edited channel',
                    connected: [],
                };


                channelsStore.editChannel(editedChannel);

                expect(uiStore.loading).toBeFalsy();
            }));

        it('should call the channelsStore.getChannels after successful add', inject([ChannelsStore, ChannelsService],
            (channelsStore: ChannelsStore, channelsService: ChannelsService) => {
                const editChannel = spyOn(channelsService, 'editChannel').and.returnValue(Observable.of(true));
                const storeGetChannelsSpy = spyOn(channelsStore, 'getChannels').and.stub();

                const editedChannel: Channel = {
                    name: 'edited channel',
                    connected: [],
                };

                channelsStore.editChannel(editedChannel);

                expect(storeGetChannelsSpy).toHaveBeenCalled();
            }));
    });

    describe('deleteChannel', () => {
        it('should set the loading flag to true before service call', inject([ChannelsStore, UiStore, ChannelsService],
            (channelsStore: ChannelsStore, uiStore: UiStore, channelsService: ChannelsService) => {
                const deleteChannel = spyOn(channelsService, 'deleteChannel').and.returnValue({ subscribe: () => { } });
                const channelToBeDeleted: Channel = {
                    name: 'channelToBeDeleted',
                    connected: [],
                };

                channelsStore.deleteChannel(channelToBeDeleted);

                expect(uiStore.loading).toBeTruthy();
            }));

        it('should set the loading flag to false after successful service call', inject([ChannelsStore, UiStore, ChannelsService],
            (channelsStore: ChannelsStore, uiStore: UiStore, channelsService: ChannelsService) => {
                const deleteChannel = spyOn(channelsService, 'deleteChannel').and.returnValue(Observable.of(true));
                const storeGetChannelsSpy = spyOn(channelsStore, 'getChannels').and.stub();
                const channelToBeDeleted: Channel = {
                    name: 'channelToBeDeleted',
                    connected: [],
                };


                channelsStore.deleteChannel(channelToBeDeleted);

                expect(uiStore.loading).toBeFalsy();
            }));
    
        it('should set the loading flag to false after failed service call', inject([ChannelsStore, UiStore, ChannelsService],
            (channelsStore: ChannelsStore, uiStore: UiStore, channelsService: ChannelsService) => {
                const deleteChannel = spyOn(channelsService, 'deleteChannel').and.returnValue(Observable.throw(''));
                const storeGetChannelsSpy = spyOn(channelsStore, 'getChannels').and.stub();
                const channelToBeDeleted: Channel = {
                    name: 'channelToBeDeleted',
                    connected: [],
                };


                channelsStore.deleteChannel(channelToBeDeleted);

                expect(uiStore.loading).toBeFalsy();
            }));

        it('should call the channelsStore.getChannels after successful add', inject([ChannelsStore, ChannelsService],
            (channelsStore: ChannelsStore, channelsService: ChannelsService) => {
                const deleteChannel = spyOn(channelsService, 'deleteChannel').and.returnValue(Observable.of(true));
                const storeGetChannelsSpy = spyOn(channelsStore, 'getChannels').and.stub();

                const channelToBeDeleted: Channel = {
                    name: 'channelToBeDeleted',
                    connected: [],
                };

                channelsStore.deleteChannel(channelToBeDeleted);

                expect(storeGetChannelsSpy).toHaveBeenCalled();
            }));
    });
});
