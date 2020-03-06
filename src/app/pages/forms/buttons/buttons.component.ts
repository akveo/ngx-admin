import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbComponentShape, NbComponentSize, NbComponentStatus, NbThemeService } from '@nebular/theme';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-buttons',
  styleUrls: ['./buttons.component.scss'],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent implements OnInit, OnDestroy {
  public constructor(private readonly themeService: NbThemeService) {}

  private readonly subscription: Subscription = new Subscription();

  public readonly statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  public readonly shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  public readonly sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];
  public materialThemeActivated: boolean = false;

  public ngOnInit(): void {
    this.subscription.add(this.themeService.onThemeChange().subscribe(theme => {
      const themeName: string = theme?.name || '';
      this.materialThemeActivated = themeName.startsWith('material');
    }));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
