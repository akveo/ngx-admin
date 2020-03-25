import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NbPopoverDirective } from '@nebular/theme';

@Component({
  selector: 'ngx-material-theme-link',
  templateUrl: './material-theme-link.component.html',
  styleUrls: ['./material-theme-link.component.scss'],
})
export class MaterialThemeLinkComponent implements AfterViewInit {
  public showPopover: boolean = false;

  @Input() public set withPopover(value: any) {
    this.showPopover = coerceBooleanProperty(value);
  }

  @ViewChild(NbPopoverDirective, { static: true }) public popover: NbPopoverDirective;

  public ngAfterViewInit(): void {
    this.showPopover && this.popover && this.popover.show();
  }

  public hidePopover(): void {
    this.popover && this.popover.hide();
  }
}
