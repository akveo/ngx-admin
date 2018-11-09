import { REDUCER_LIST } from '../reducer.constants';

export class ListReducer {
  constructor() {
  }
  static ListReducerGenero(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.Genero:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerClasificacionNivelIdioma(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.ClasificacionNivelIdioma:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerEstadoAdmision(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.EstadoAdmision:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerEstadoCivil(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.EstadoCivil:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerGrupoEtnico(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.GrupoEtnico:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerIdioma(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.Idioma:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerLineaInvestigacion(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.LineaInvestigacion:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerPais(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.Pais:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerCiudad(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.Ciudad:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerLugar(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.Lugar:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerMetodologia(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.Metodologia:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerNivelFormacion(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.NivelFormacion:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerNivelIdioma(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.NivelIdioma:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerProgramaAcademico(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.ProgramaAcademico:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerTipoContacto(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.TipoContacto:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerTipoDiscapacidad(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.TipoDiscapacidad:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerTipoLugar(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.TipoLugar:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerTitulacion(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.Titulacion:
        return [...state, action.payload];
      default:
        return state;
      }
  }

  static ListReducerTipoIdentificacion(state: Array<any> =  new Array, action) {
    switch (action.type) {
      case REDUCER_LIST.TipoIdentificacion:
        return [...state, action.payload];
      default:
        return state;
      }
  }

}

