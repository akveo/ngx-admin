import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { forkJoin,  of as observableOf,  Observable } from 'rxjs';
import { map,  catchError } from 'rxjs/operators';
import { NgxExampleView } from '../../enum.example-view';
import { NgxCodeLoaderService } from '../../../@theme/services/code-loader.service';

@Component({
  selector: 'ngx-tabbed-example-block',
  styleUrls: ['./tabbed-example-block.component.scss'],
  templateUrl: './tabbed-example-block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxTabbedExampleBlockComponent {


  @Input() hasViewSwitch = false;
  @Output() changeView = new EventEmitter<NgxExampleView>();
  examples = [];

  @Input()
  set content({ files }) {
    forkJoin(files.map(file => this.load(file)))
      .subscribe(loadedFiles => {
        (loadedFiles[0] as any).active = true;
        this.examples = loadedFiles;
        this.cd.detectChanges();
      });
  }

  constructor(private codeLoader: NgxCodeLoaderService, private cd: ChangeDetectorRef) {
  }

  switchToLiveView() {
    this.changeView.emit(NgxExampleView.LIVE);
  }

  private load(path): Observable<any> {
    const extension = path.split('.').pop();
    return this.codeLoader.load(path)
      .pipe(
        map(code => ({ code, path, extension })),
        catchError(e => observableOf('')),
      );
  }
}
