import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-reveal-card',
  templateUrl: './reveal-card.component.html',
  styleUrls: ['./reveal-card.component.scss'],
})
export class RevealCardComponent {

  @Input() revealed = false;
  @Input() size = 'medium';

}
