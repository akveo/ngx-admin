import { Lugar } from './lugar';

export class InformacionContacto {
  PaisResidencia: Lugar;
  DepartamentoResidencia: Lugar;
  CiudadResidencia: Lugar;
  DireccionResidencia: string;
  EstratoResidencia: number;
  CodigoPostal: string;
  Telefono: string;
  TelefonoAlterno: string;
  Ente: number;
  IdLugarEnte: number;
  IdDireccionEnte: number;
  IdEstratoEnte: number;
  IdCodigoEnte: number;
  IdTelefonoEnte: number;
  IdTelefonoAlternoEnte: number;
}
