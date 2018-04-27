
import { TipoDiscapacidad } from './tipo_discapacidad';
import { EstadoCivil } from './estado_civil';
import { GrupoEtnico } from './grupo_etnico';
import { Genero } from './genero';

export class InfoPersona {
  Id: number;
  PrimerNombre: string;
  SegundoNombre: string;
  PrimerApellido: string;
  SegundoApellido: string;
  FechaNacimiento: Date;
  Usuario: string;
  Foto: string;
  TipoDiscapacidad: Array<TipoDiscapacidad>;
  EstadoCivil: EstadoCivil;
  GrupoEtnico: GrupoEtnico;
  Genero: Genero;
}
