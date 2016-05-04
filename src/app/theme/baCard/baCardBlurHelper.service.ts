import {Injectable} from 'angular2/core'

import {BgMetrics} from './bgMetrics';

@Injectable()
export class BaCardBlurHelper {
  private image:HTMLImageElement;
  private imageLoadDeferred = Promise.defer(); //TODO: Promises or Observables refactor

  constructor() {
    this._genBgImage();
    this._setImageLoadResolves()
  }

  private _genBgImage():void {
    this.image = new Image();
    let computedStyle = getComputedStyle(document.body, ':before');
    this.image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
  }

  private _setImageLoadResolves():void {
    this.image.onerror = () => {
      this.imageLoadDeferred.reject();
    };
    this.image.onload = () => {
      this.imageLoadDeferred.resolve();
    };
  }

  public bodyBgLoad():Promise {
    return this.imageLoadDeferred.promise;
  }

  public getBodyBgImageSizes():BgMetrics {
    let elemW = document.documentElement.clientWidth;
    let elemH = document.documentElement.clientHeight;
    if(elemW <= 640) return;
    let imgRatio = (this.image.height / this.image.width);       // original img ratio
    let containerRatio = (elemH / elemW);     // container ratio

    let finalHeight, finalWidth;
    if (containerRatio > imgRatio) {
      finalHeight = elemH;
      finalWidth = (elemH / imgRatio);
    } else {
      finalWidth = elemW;
      finalHeight = (elemW * imgRatio);
    }
    return { width: finalWidth, height: finalHeight, positionX: (elemW - finalWidth)/2, positionY: (elemH - finalHeight)/2};
  }
}
