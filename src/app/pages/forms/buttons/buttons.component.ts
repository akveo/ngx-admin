import { Component } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'ngx-buttons',
  styleUrls: ['./buttons.component.scss'],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {
  public readonly statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  public readonly shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  public readonly sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
}
