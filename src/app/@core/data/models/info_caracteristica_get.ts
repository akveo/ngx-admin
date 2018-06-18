import { GrupoEtnico } from './grupo_etnico';
import { TipoDiscapacidad } from './tipo_discapacidad';
import { Lugar } from './lugar';

export class InfoCaracteristicaGet {
  GrupoSanguineo: string;
  Rh: string;
  GrupoEtnico: GrupoEtnico;
  TipoDiscapacidad: Array<TipoDiscapacidad>;
  Lugar: Array<{
    Id: number;
    Lugar: {
      CIUDAD: Lugar;
      DEPARTAMENTO: Lugar;
      PAIS: Lugar;
    };
    TipoRelacionUbicacionEnte: {
      Id: number;
    };
  }>;
  Ente: number;
}
