import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ngx-docs-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxDocsFooterComponent {
}
