import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';

export class Camera {
  title: string;
  source: string;
}

@Injectable()
export class SecurityCamerasService {

  private cameras: Camera[] = [
    {
      title: 'Camera #1',
      source: 'assets/images/camera1.jpg',
    },
    {
      title: 'Camera #2',
      source: 'assets/images/camera2.jpg',
    },
    {
      title: 'Camera #3',
      source: 'assets/images/camera3.jpg',
    },
    {
      title: 'Camera #4',
      source: 'assets/images/camera4.jpg',
    },
  ];

  getCamerasData(): Observable<Camera[]> {
    return observableOf(this.cameras);
  }
}
