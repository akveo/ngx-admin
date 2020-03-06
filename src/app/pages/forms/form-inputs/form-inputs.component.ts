import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent implements OnInit, OnDestroy {
  public constructor(private readonly themeService: NbThemeService) {}

  private readonly subscription: Subscription = new Subscription();

  public materialThemeActivated: boolean = false;
  public starRate: number = 2;
  public heartRate: number = 4;
  public radioGroupValue: string = 'This is value 2';

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
