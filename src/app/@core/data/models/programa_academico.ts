import { Metodologia } from './metodologia';
import { NivelFormacion } from './nivel_formacion';
import { Titulacion } from './titulacion';

export class ProgramaAcademico {
  Id: number;
  CodigoSnies: number;
  Nombre: string;
  Institucion: number;
  Metodologia: Metodologia;
  NivelFormacion: NivelFormacion;
  Titulacion: Titulacion;
  Duracion: number;
  UnidadTiempo: Array<string>;
}
