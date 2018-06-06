
import { GrupoEtnico } from './grupo_etnico';
import { TipoDiscapacidad } from './tipo_discapacidad';
import { Lugar } from './lugar';

export class InfoCaracteristica {
  GrupoSanguineo: string;
  Rh: string;
  GrupoEtnico: GrupoEtnico;
  TipoDiscapacidad: Array<TipoDiscapacidad>;
  Lugar: Lugar;
  TipoRelacionUbicacionEnte: number;
  Ente: number;
}
