import {
  Component,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostBinding,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { Location } from '@angular/common';
import { takeWhile } from 'rxjs/operators';
import { NgxExampleView } from '../../enum.example-view';
import { NgxIframeCommunicatorService } from '../../../@theme/services/iframe-communicator.service';

@Component({
  selector: 'ngx-live-example-block',
  styleUrls: ['./live-example-block.component.scss'],
  templateUrl: './live-example-block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxLiveExampleBlockComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('iframe', { static: false }) iframe: ElementRef;
  @Input() content: any;
  @Input() hasViewSwitch: boolean = false;
  @Output() changeView = new EventEmitter<NgxExampleView>();

  /* tslint:disable:no-unused-variable */
  @HostBinding('class.theme-default')
  private get isDefault() {
    return this.currentTheme === 'default';
  }

  @HostBinding('class.theme-cosmic')
  private get isCosmic() {
    return this.currentTheme === 'cosmic';
  }

  @HostBinding('class.theme-corporate')
  private get isCorporate() {
    return this.currentTheme === 'corporate';
  }
  /* tslint:enable:no-unused-variable */

  iframeHeight = 0;
  alive: boolean = true;

  themes: {label: string; value: string}[] = [
    { label: 'Default', value: 'default' },
    { label: 'Cosmic', value: 'cosmic' },
    { label: 'Corporate', value: 'corporate' },
  ];

  currentTheme: string = 'default';
  loading = true;

  get url(): string {
    return this.location.prepareExternalUrl(`example/${this.content.id}`);
  }

  get iframeWindow(): Window {
    return this.iframe.nativeElement.contentWindow;
  }

  constructor(private changeDetection: ChangeDetectorRef,
              private location: Location,
              private communicator: NgxIframeCommunicatorService) {
  }

  ngOnInit() {
    this.communicator.receive(this.content.id)
      .pipe(takeWhile(() => this.alive))
      .subscribe(it => {
        this.iframeHeight = it.height;
        this.loading = false;
        this.changeDetection.detectChanges();
      });
  }

  ngAfterViewInit() {
    // we cannot set src using angular binding
    // as it will trigger change detection and reload iframe
    // which in its turn will send a new height
    // and we would need to set the height and trigger change detection again
    // resulting in infinite loop
    this.iframe.nativeElement.src = this.url;
  }

  ngOnDestroy() {
    this.alive = false;
  }

  switchTheme(theme: string) {
    this.communicator.send({ id: this.content.id, theme }, this.iframeWindow);
  }

  switchToInlineVew() {
    this.changeView.emit(NgxExampleView.INLINE);
  }
}
