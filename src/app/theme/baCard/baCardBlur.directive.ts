import {Directive, ElementRef, HostListener} from 'angular2/core';
import {BaCardBlurHelper} from './baCardBlurHelper.service';

import {BgMetrics} from './bgMetrics';

@Directive({
  selector: '[baCardBlur]',
  providers: [BaCardBlurHelper]
})
export class BaCardBlur {
  private _bodyBgSize:BgMetrics;

  constructor(private _baCardBlurHelper:BaCardBlurHelper, private _el:ElementRef) {
    this._getBodyImageSizesOnBgLoad();
    this._recalculateCardStylesOnBgLoad();
  }

  @HostListener('window:resize')
  _onWindowResize():void {
    this._bodyBgSize = this._baCardBlurHelper.getBodyBgImageSizes();
    this._recalculateCardStyle();
  }

  private _getBodyImageSizesOnBgLoad():void {
    this._baCardBlurHelper.bodyBgLoad().then(function() {
      this._bodyBgSize = this._baCardBlurHelper.getBodyBgImageSizes();
    });
  }

  private _recalculateCardStylesOnBgLoad():void {
    this._baCardBlurHelper.bodyBgLoad().then(() => {
      setTimeout(this._recalculateCardStyle);
    });
  }

  private _recalculateCardStyle():void {
    if (!this._bodyBgSize) {
      return;
    }
    this._el.nativeElement.style.backgroundSize = Math.round(this._bodyBgSize.width) + 'px ' + Math.round(this._bodyBgSize.height) + 'px';
    this._el.nativeElement.style.backgroundPosition = Math.floor(this._bodyBgSize.positionX) + 'px ' + Math.floor(this._bodyBgSize.positionY) + 'px';
  }
}
