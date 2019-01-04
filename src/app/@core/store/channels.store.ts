import { Injectable } from '@angular/core';
import { action, observable } from 'mobx';

import { ChannelsService } from '../services/channels/channels.service';
import { Channel } from './models';
import { UiStore } from './ui.store';

@Injectable()
export class ChannelsStore {
    @observable channels: Channel[] = [];

    constructor(
        private uiState: UiStore,
        private channelsService: ChannelsService,
    ) { }

    @action
    getChannels() {
        this.uiState.loading = true;
        this.channelsService.getChannels()
            .subscribe((payload: any) => {
                this.uiState.loading = false;
                this.channels = payload;
            }, () => {
                this.uiState.loading = false;
            });
    }

    @action
    addChannel(channel: Channel) {
        this.uiState.loading = true;
        console.log('add ch');
        this.channelsService.addChannel(channel)
            .subscribe(resp => {
                console.log(resp);
                this.uiState.loading = false;
                this.getChannels();
            }, () => {
                this.uiState.loading = false;
            });
    }

    @action
    editChannel(editedChannel: Channel) {
        this.uiState.loading = true;
        this.channelsService.editChannel(editedChannel, this.getChannelById(editedChannel.id))
            .subscribe(() => {
                this.uiState.loading = false;
                this.getChannels();
            }, () => {
                this.uiState.loading = false;
            });
    }

    private getChannelById(id: string) {
        return this.channels.find(ch => ch.id === id);
    }

    @action
    deleteChannel(channel: Channel) {
        this.uiState.loading = true;
        this.channelsService.deleteChannel(channel)
            .subscribe(() => {
                this.uiState.loading = false;
                this.getChannels();
            }, () => {
                this.uiState.loading = false;
            });
    }
}
