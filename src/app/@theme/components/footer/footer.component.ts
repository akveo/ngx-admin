import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="http://akveo.com?utm_source=ngx-admin-demo&utm_medium=footer"
                              target="_blank">Akveo</a></b> 2019.
      Made with
      <b>
        <a href="https://akveo.github.io/nebular/?utm_source=ngx-admin&utm_medium=footer_link" target="_blank">
        Nebular.
        </a>
      </b>
    </span>
    <div class="socials">
      <a href="https://github.com/akveo/ngx-admin" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/akveo/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/akveo_inc" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/company/akveo" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
