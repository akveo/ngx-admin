import { Idioma } from './idioma';
import { ClasificacionNivelIdioma } from './clasificacion_idioma';
import { NivelIdioma } from './nivel_idioma';

export class InfoIdioma {
  Id: number;
  Persona: number;
  Idioma: Idioma;
  Nativo: boolean;
  NivelEscribe: NivelIdioma;
  NivelEscucha: NivelIdioma;
  NivelHabla: NivelIdioma;
  NivelLee: NivelIdioma;
  ClasificacionNivelIdioma: ClasificacionNivelIdioma;
}
