import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { NbWindowService } from '@nebular/theme';
import { NbActionsModule } from '@nebular/theme';
import { MFXRoutingModule, routedComponents } from './mfx-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { ButtonRenderComponent } from './channels/button.render.component';
import { ConnectedRenderComponent } from './channels/connected.render.component';
import { ThingConnectRenderComponent } from './things/thingconnect.render.component';
import { ChannelConnectRenderComponent } from './channels/channelconnect.render.component';
import { ChannelFormComponent } from './things/channel-form/channel-form.component';
import { ThingsFormComponent } from './channels/channel-form/channel-form.component';
import { ThingsStore } from '../../@core/store/things.store';
import { ChannelsStore } from '../../@core/store/channels.store';
import { UiStore } from '../../@core/store/ui.store';
import { ThingsService } from '../../@core/services/things/things.service';
import { ChannelsService } from '../../@core/services/channels/channels.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../../auth/auth-token-interceptor.service';


@NgModule({
  imports: [
    ThemeModule,
    MFXRoutingModule,
    Ng2SmartTableModule,
    NbActionsModule,
  ],
  declarations: [
    ...routedComponents,
    ButtonRenderComponent,
    ConnectedRenderComponent,
    ThingConnectRenderComponent,
    ChannelConnectRenderComponent,
    ChannelFormComponent,
    ThingsFormComponent,
  ],
  entryComponents: [
    ButtonRenderComponent,
    ConnectedRenderComponent,
    ChannelFormComponent,
    ThingsFormComponent,
    ThingConnectRenderComponent,
    ChannelConnectRenderComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    SmartTableService,
    ThingsStore,
    ChannelsStore,
    UiStore,
    ThingsService,
    ChannelsService,
    HttpClientModule,
    NbWindowService,

  ],
})
export class MFXModule { }
