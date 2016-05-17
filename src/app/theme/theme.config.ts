import {Injectable} from '@angular/core';
import {BaThemeConfigProvider} from './theme.configProvider';

@Injectable()
export class BaThemeConfig {

  constructor(private _baConfig:BaThemeConfigProvider) {
    this._config();
  }

  private _config() {
    // this._baConfig.changeTheme({blur: true});
    //
    // this._baConfig.changeColors({
    //   default: 'rgba(#000000, 0.2)',
    //   defaultText: '#ffffff',
    //   dashboard: {
    //     white: '#ffffff',
    //   },
    // });
  }
}
