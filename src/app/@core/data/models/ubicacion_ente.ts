import { AtributosEnte } from './atributos_ente';
import { LugarEnte } from './lugar_ente';
import { TipoRelacionUbicacionEnte } from './tipo_relacion_ubicacion_ente';

export class UbicacionEnte {
  Atributos: AtributosEnte[];
  Id: number;
  Lugar: LugarEnte;
  TipoRelacionUbicacionEnte: TipoRelacionUbicacionEnte;
}
