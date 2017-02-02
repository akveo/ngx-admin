import { Injectable } from '@angular/core';

@Injectable()
export class BaImageLoaderService {

  public load(src: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const img: any = new Image();
      img.src = src;
      img.onload = () => {
        resolve(`Image with src ${src} loaded successfully.`);
      };
    });
  }
}
