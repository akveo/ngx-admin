import { TipoIdentificacion } from './tipo_identificacion';
import { EstadoCivil } from './estado_civil';
import { Genero } from './genero';

export class InfoPersona {
  PrimerNombre: string;
  SegundoNombre: string;
  PrimerApellido: string;
  SegundoApellido: string;
  FechaNacimiento: Date;
  Foto: string;
  Usuario: string;
  EstadoCivil: EstadoCivil;
  Genero: Genero;
  Id: number;
  TipoIdentificacion: TipoIdentificacion;
  NumeroDocumento: string;
  SoporteDocumento: string;
}
