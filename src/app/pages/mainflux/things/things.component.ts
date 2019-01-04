import {ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs/observable/forkJoin';

import { LocalDataSource } from 'ng2-smart-table';
import { Thing } from '../../../@core/store/models';
import { Channel } from '../../../@core/store/models';

import { ThingsStore } from '../../../@core/store/things.store';
import { ChannelsStore } from '../../../@core/store/channels.store';

import { ThingsService } from '../../../@core/services/things/things.service';
import { ChannelsService } from '../../../@core/services/channels/channels.service';
import { ThingConnectRenderComponent } from './thingconnect.render.component'


@Component({
  selector: 'ngx-smart-table',
  templateUrl: './things.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    },
    nb-actions {
	actions-bg:#3d3780;
	actions-separator:#342e73;
    },
  `],
})
export class ThingsComponent {


  settings = {
    selectMode: 'multi',
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
	editable: 'false',
	addable: false,
      },
      type: {
        title: 'Type',
        type: 'string',
 	editor: {
          type: 'list',
          config: {
            list: [{ value: 'app', title: 'App' }, { value: 'device', title: 'Device' }],
          },
	},
      },
      key: {
        title: 'Key',
	editable: 'false',
	addable: false,
      },
      name: {
        title: 'Device Name',
        type: 'string',
      },
      metadata: {
        title: 'Metadata',
        type: 'textarea',
      },
      connect: {
        title: 'List Channels',
        type: 'custom',
        renderComponent: ThingConnectRenderComponent,
        defaultValue: 'List of connected channels'
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();
  things: Observable<Thing[]>;


  constructor(
    private service: ThingsService,
    private cservice: ChannelsService,
    public thingsStore: ThingsStore,
    public channelsStore: ChannelsStore,
  ) {

  }

  ngOnInit() {
    //const data = this.thingsStore.getThings();
    this.service.getThings().subscribe((payload: any) => {
    	console.log("DATA2" ,payload.things);
        this.things = payload.things;
    	this.source.load(payload.things);
    });
    this.channelsStore.getChannels();
  }

  onCreateConfirm(event): void {
      console.log("Test on add ");
      console.log(event.newData);
      event.confirm.resolve();
      this.thingsStore.addThing(event.newData);
      this.source.refresh();
    }

   onSaveConfirm(event): void {
    if (window.confirm('Are you sure you want to save?')) {
      console.log("Test on Edit ");
      console.log(event.newData);
      event.confirm.resolve();
      this.thingsStore.editThing(event.newData);
      this.source.refresh();
    } else {
      event.confirm.reject();
    }
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      console.log("Test on delete ");
      console.log(event);
      event.confirm.resolve();
      this.thingsStore.deleteThing(event.data);
      this.source.refresh();
    } else {
      event.confirm.reject();
    }
  }

  onSelection(event): void {
	console.log(event.selected);
	var id = "1";
	var name = "sensor_temp";

 	const channel = {} as Channel;
      	channel.name = name;
      	//channel.id = id;
      	channel.connected = event.selected;
	this.cservice.addChannel(channel);

	//forkJoin(this.cservice.createThingsConnectRequests(id, event.selected));
  }
}
