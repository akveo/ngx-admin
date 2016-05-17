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

  ngOnInit() {
    this._assignBlur();
    this._assingMobile();
  }

  // TODO: assign any theme class, not only hardcoded blur
  private _assignBlur() {
    this.isBlur = this._baConfig.get().theme.blur;
  }

  private _assingMobile() {
    this.isMobile = isMobile();
  }
}
