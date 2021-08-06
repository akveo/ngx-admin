import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://www.akveo.com?utm_campaign=services%20-%20homepage%20-%20ngx_admin%20demo&utm_source=ngx_admin&utm_medium=referral&utm_content=demo_footer_link"
                              target="_blank">Akveo</a></b> 2019.
      Made with
      <b>
        <a href="https://akveo.github.io/nebular/?utm_campaign=nebular%20-%20home%20-%20ngx_admin%20demo&utm_source=ngx_admin&utm_medium=referral&utm_content=nebular_footer_link" target="_blank">
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
