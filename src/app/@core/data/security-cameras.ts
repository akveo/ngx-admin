import { Observable } from 'rxjs';

export interface Camera {
  title: string;
  source: string;
}

export abstract class SecurityCamerasData {
  abstract getCamerasData(): Observable<Camera[]>;
}
