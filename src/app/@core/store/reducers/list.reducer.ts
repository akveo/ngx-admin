import { REDUCER_LIST } from '../reducer.constants';

  export function ListReducer(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.Genero:
        return [...state, action.payload];
      case REDUCER_LIST.ClasificacionNivelIdioma:
        return [...state, action.payload];
      case REDUCER_LIST.EstadoAdmision:
        return [...state, action.payload];
      case REDUCER_LIST.EstadoCivil:
        return [...state, action.payload];
      case REDUCER_LIST.GrupoEtnico:
        return [...state, action.payload];
      case REDUCER_LIST.Idioma:
        return [...state, action.payload];
      case REDUCER_LIST.LineaInvestigacion:
        return [...state, action.payload];
      case REDUCER_LIST.Pais:
        return [...state, action.payload];
      case REDUCER_LIST.Ciudad:
        return [...state, action.payload];
      case REDUCER_LIST.Lugar:
        return [...state, action.payload];
      case REDUCER_LIST.Metodologia:
        return [...state, action.payload];
      case REDUCER_LIST.NivelFormacion:
        return [...state, action.payload];
      case REDUCER_LIST.NivelIdioma:
        return [...state, action.payload];
      case REDUCER_LIST.ProgramaAcademico:
        return [...state, action.payload];
      case REDUCER_LIST.TipoContacto:
        return [...state, action.payload];
      case REDUCER_LIST.TipoDiscapacidad:
        return [...state, action.payload];
      case REDUCER_LIST.TipoLugar:
        return [...state, action.payload];
      case REDUCER_LIST.Titulacion:
        return [...state, action.payload];
      default:
        return state;
      }
  }


