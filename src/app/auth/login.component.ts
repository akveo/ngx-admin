
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, Input, ChangeDetectorRef, Inject } from '@angular/core';
import { NbLoginComponent, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { User } from '../@core/data/user';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { UserResponse } from '../@core/data/user-response';
import { NbComponentStatus, NbGlobalPosition, NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
})
export class LoginComponent extends NbLoginComponent {

  @Input() user: User;

  index = 1;
  destroyByClick = true;
  duration = 2000;
  hasIcon = true;
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbComponentStatus = 'primary';

  title = 'Login Symfonia';
  content = `Anda tidak mempunyai akses ke Symfonia`;

  avail: boolean = false;

  constructor(private toastrService: NbToastrService, private authService: LoginService, service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) options: {}, cd: ChangeDetectorRef, routes: Router) {
    super(service, options, cd, routes);
  }

  onLogin() {
    this.authService.login(this.user).subscribe((res: UserResponse) => {
      if (res.username != null) {
        for (var i = 0; i < res.value.length; i++) {
          if
            (res.value[i].resourcealias == "IDM.Symfonia") {
            this.avail = true;
          }
        }
        if (this.avail) {
          this.router.navigate(['/pages/partner-price']);
        } else if (res.value.length == 0) {
          this.makeToast(this.content);
        }
      } else {
        this.makeToast("User tidak di temukan, atau password anda salah.");
      }
    });

  }

  makeToast(cont: any) {
    this.showToast(this.status, this.title, cont);
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `. ${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      titleContent,
      config);
  }

}