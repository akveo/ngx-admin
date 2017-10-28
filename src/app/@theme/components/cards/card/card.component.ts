import { RevealCardComponent } from '../reveal-card/reveal-card.component';
import { NbCardComponent } from '@nebular/theme/components/card/card.component';
import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'ngx-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {

  @Input() size = '';
  @Input() status = '';
  @Input() accent = '';

}
