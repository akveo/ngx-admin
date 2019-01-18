import { Observable } from 'rxjs';

export abstract class SolarData {
  abstract getSolarData(): Observable<number>;
}
