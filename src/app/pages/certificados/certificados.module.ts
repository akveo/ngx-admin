import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { SharedModule } from '../../shared/shared.module';
import { CertificadosRoutingModule, routedComponents } from './certificados-routing.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { ExportAsModule } from '../../../../node_modules/ngx-export-as/lib/index';
import { PruebaQrComponent } from './prueba-qr/prueba-qr.component';

@NgModule({
  imports: [
    ThemeModule,
    SharedModule,
    CertificadosRoutingModule,
    NgxQRCodeModule,
    ExportAsModule,
  ],
  declarations: [
    ...routedComponents,
    PruebaQrComponent,
  ],
  providers: [
    SharedModule,
  ],
})
export class CertificadosModule {
}
