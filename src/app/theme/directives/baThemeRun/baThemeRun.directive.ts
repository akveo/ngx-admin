import {Directive, HostBinding} from '@angular/core';

import {BaThemeConfigProvider, isMobile} from '../../../theme';

@Directive({
  selector: '[baThemeRun]'
})
export class BaThemeRun {

  @HostBinding('class.blur-theme') isBlur:boolean = false;
  @HostBinding('class.mobile') isMobile:boolean = false;

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  public ngOnInit():void {
    this._assignBlur();
    this._assignMobile();
  }

  // TODO: assign any theme class, not only hardcoded blur
  private _assignBlur():void {
    this.isBlur = this._baConfig.get().theme.blur;
  }

  private _assignMobile():void {
    this.isMobile = isMobile();
  }
}
