import { ProgramaAcademico } from './programa_academico';

export class Enfasis {
  Id: number;
  Nombre: string;
  Descripcion: string;
  CodigoAbreviacion: string;
  Activo: boolean;
  NumeroOrden: number;
  ProgramaAcademico: ProgramaAcademico;
}
