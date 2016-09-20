import { Component, Input} from '@angular/core';

export class ReportDescRow {
  name:string;
  desc:string;
}
export class ReportDescBody {
  url:string;
  rows:ReportDescRow[];
}
@Component({
  selector: "me-report-desc",
  template: `
  <div class="row">
    <div class="col-md-6">
    <ba-card title="报表说明" baCardClass="with-scroll table-panel">
        <table *ngIf="descBody" class="table table-bordered" style="background-color: white">
            <tr *ngFor="let row of descBody.rows">
              <td>{{row.name}}</td>
              <td>{{row.desc}}</td>
            </tr>
            <tr>
              <td>报表生成链接</td>
              <td><a href="{{descBody.url}}" target="_blank">链接</a> </td>
            </tr>
        </table>
    </ba-card>
    </div>
  </div>
`,
  directives: [],
  styles: []
})
export class MeReportDescComponent {

  @Input()
  descBody:ReportDescBody;
}
