import { IAppState } from './app.state';
import { ActionReducerMap } from '@ngrx/store';
import { ListReducer } from './reducers/list.reducer';

export const rootReducer: ActionReducerMap<IAppState> = {
  listGenero: ListReducer,
  listClasificacionNivelIdioma: ListReducer,
  listEstadoAdmision: ListReducer,
  listEstadoCivil: ListReducer,
  listGrupoEtnico: ListReducer,
  listIdioma: ListReducer,
  listLineaInvestigacion: ListReducer,
  listPais: ListReducer,
  listCiudad: ListReducer,
  listLugar: ListReducer,
  listMetodologia: ListReducer,
  listNivelFormacion: ListReducer,
  listNivelIdioma: ListReducer,
  listProgramaAcademico: ListReducer,
  listTipoContacto: ListReducer,
  listTipoDiscapacidad: ListReducer,
  listTipoLugar: ListReducer,
  listTitulacion: ListReducer,
}
