import { Component, HostBinding, Inject, OnDestroy, OnInit } from '@angular/core';
import { NB_WINDOW, NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

const HIDE_BANNER_KEY = 'HIDE_RELEASE_2_BANNER';

@Component({
  selector: 'ngx-release-banner',
  template: `
    <div class="heading-with-icon">
      <img class="icon" [src]="getBellPath()" alt="bell">
      <h1 class="banner-heading">Nebular 2.0 stable <br> with 30+ components is out!</h1>
      <button class="close-button" aria-label="close" (click)="closeBanner()">
        <span class="nb-close"></span>
      </button>
    </div>
    <p class="cta">
      Don't forget to <a class="cta-link" href="https://github.com/akveo/nebular">check out</a> and star our repo :)
    </p>
  `,
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, OnDestroy {

  private alive = true;
  storage: Storage;
  isDarkTheme: boolean;

  @HostBinding('attr.hidden')
  isHidden: true | null = null;

  @HostBinding('attr.dir')
  dir = 'ltr';

  constructor(
    @Inject(NB_WINDOW) private window,
    private themeService: NbThemeService,
  ) {}

  ngOnInit() {
    this.storage = this.window.localStorage;

    this.isHidden = this.storage && this.storage.getItem(HIDE_BANNER_KEY)
      ? true
      : null;

    this.isDarkTheme = this.themeService.currentTheme === 'cosmic';
    this.themeService.onThemeChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe(({ name }) => this.isDarkTheme = name === 'cosmic');
  }

  closeBanner() {
    if (this.storage) {
      this.storage.setItem(HIDE_BANNER_KEY, 'true');
    }
    this.isHidden = true;
  }

  getBellPath() {
    return `assets/images/bell${this.isDarkTheme ? '' : '-white'}.svg`;
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
