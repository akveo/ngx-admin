
import { GrupoEtnico } from './grupo_etnico';
import { TipoDiscapacidad } from './tipo_discapacidad';

export class InfoCaracteristica {
  GrupoSanguineo: string;
  Rh: string;
  GrupoEtnico: GrupoEtnico;
  TipoDiscapacidad: Array<TipoDiscapacidad>;
}
