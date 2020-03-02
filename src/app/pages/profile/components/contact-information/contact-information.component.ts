import { Component, Input } from '@angular/core';
import { User } from '../../../../@core/data/users';

@Component({
  selector: 'ngx-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
})
export class ContactInformationComponent {
  @Input() user: User;
}
