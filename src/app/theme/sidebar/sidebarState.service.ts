import {Injectable} from 'angular2/core'
import {Subject}    from 'rxjs/Subject';

@Injectable()
export class SidebarStateService {

  // Observable string sources
  private _isCollapsed = new Subject<boolean>();

  // Observable string streams
  isCollapsedStream$ = this._isCollapsed.asObservable();

  // Service message commands
  stateChanged(isCollapsed: boolean) {
    this._isCollapsed.next(isCollapsed)
  }

  getStateStream() {
    return this.isCollapsedStream$;
  }
}
