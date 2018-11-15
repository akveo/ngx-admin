import { EstadoAdmision } from './estado_admision';
import { LineaInvestigacion } from './linea_investigacion';
import { Enfasis } from './enfasis';

export class Admision {
  Id: number;
  Aspirante: number;
  ProgramaAcademico: number;
  ReciboMatricula: number;
  ReciboInscripcion: number;
  Periodo: number;
  Propuesta: number;
  EstadoAdmision: EstadoAdmision;
  LineaInvestigacion: LineaInvestigacion;
  Enfasis: Enfasis;
  AceptaTerminos: boolean;
}
