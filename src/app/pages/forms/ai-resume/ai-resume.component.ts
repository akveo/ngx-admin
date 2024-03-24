import { Component } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'ngx-buttons',
  styleUrls: ['./ai-resume.component.scss'],
  templateUrl: './ai-resume.component.html',
})
export class AiResumeComponent {
  status: NbComponentStatus = 'primary' ;
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  size: NbComponentSize =  'tiny';
}
