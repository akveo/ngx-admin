import {Injectable} from '@angular/core'
import {Subject}    from 'rxjs/Subject';

@Injectable()
export class ThemeGlobal {
  private _data = new Subject<Object>();

  dataStream$ = this._data.asObservable();

  constructor() {
  }

  setData(key, value) {
    let current = this._data[key];
    if (current != value) {
      this._data[key] = value;
      this._data.next(this._data);
    }
  }

  getDataStream() {
    return this.dataStream$;
  }
}
