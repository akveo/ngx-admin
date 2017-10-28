import { Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-card-accent',
  template: `
    <div class="accent" [ngClass]="'accent-' + type" [style.background-color] = "color"></div>
  `,
  styleUrls: ['./card-accent.component.scss'],
})
export class CardAccentComponent {

  @Input() type = '';
  @Input() color = '';

}
