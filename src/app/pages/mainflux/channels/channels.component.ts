import { Component } from '@angular/core';

import { ViewCell, LocalDataSource } from 'ng2-smart-table';
import { ButtonRenderComponent } from './button.render.component'
import { ConnectedRenderComponent } from './connected.render.component';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import { Observable } from 'rxjs';

import { Channel } from '../../../@core/store/models';
import { ThingsStore } from '../../../@core/store/things.store';
import { ChannelsStore } from '../../../@core/store/channels.store';
import { ChannelsService } from '../../../@core/services/channels/channels.service';
import { ChannelConnectRenderComponent } from './channelconnect.render.component'




@Component({
  selector: 'ngx-smart-table',
  templateUrl: './channels.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class ChannelsComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'custom',
        renderComponent: ButtonRenderComponent,
        defaultValue: 'Connect',
        editable: 'false',
        addable: false,
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      conncted: {
        title: 'List Devices',
        type: 'custom',
        renderComponent: ChannelConnectRenderComponent,
        defaultValue: 'List of connected things',
        //renderComponent: ConnectedRenderComponent,
	//filterFunction(cell?: any, search?: string): boolean {
      	//	const match = cell.indexOf(search) > -1;
	//	 console.log("Cell : ", match, search);
        //        return true ;
        //},
 	editable: 'false',
        addable: false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  channels: Observable<Channel[]>;
	
  constructor(
    private service: ChannelsService,
    public thingsStore: ThingsStore,
    public channelsStore: ChannelsStore,
  ) {

  }

  ngOnInit() {
    const data = this.channelsStore.getChannels();
    console.log("DATA1" ,data);
    this.service.getChannels().subscribe((payload: any) => {
        console.log("DATA2" ,payload);
        this.channels = payload
        this.source.load(payload);
    });
    this.channelsStore.getChannels();
  }

  onCreateConfirm(event): void {
      const channel = {} as Channel;
      channel.name = event.newData.name;
      channel.connected = [];
      event.confirm.resolve();
      this.channelsStore.addChannel(channel);
      this.source.refresh();
    }

  onSaveConfirm(event): void {
      console.log("Test on edit ");
      console.log(event);
      event.confirm.resolve();
      this.channelsStore.editChannel(event);
      this.source.refresh();
    }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log("Test on delete ");
      console.log(event);
      event.confirm.resolve();
      this.channelsStore.deleteChannel(event.data);
      this.source.refresh();
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
