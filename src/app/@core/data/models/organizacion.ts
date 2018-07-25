import { TipoIdentificacion } from './tipo_identificacion';
import { ContactoEnte } from './contacto_ente';

export class Organizacion {
  Ente: any;
  Nombre: string;
  Contacto: Array<ContactoEnte>;
  FechaExpedicion: Date;
  LugarExpedicion: number;
  NumeroIdentificacion: string;
  TipoIdentificacion: TipoIdentificacion;
  TipoOrganizacion: any;
  Ubicacion: any;
}
