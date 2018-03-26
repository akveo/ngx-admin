import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-charts-advanced-pie-chart',
  template: '',
})
export class AdvancedPieComponent {
  @Input() scheme;
  @Input() results;
}

@Component({
  selector: 'ngx-charts-area-chart',
  template: '',
})
export class AreaStackComponent {
  @Input() scheme;
  @Input() results;
  @Input() xAxis;
  @Input() yAxis;
  @Input() legend;
  @Input() showXAxisLabel;
  @Input() showYAxisLabel;
  @Input() xAxisLabel;
  @Input() yAxisLabel;
  @Input() autoScale;
}

@Component({
  selector: 'ngx-charts-bar-vertical',
  template: '',
})
export class BarComponent {
  @Input() scheme;
  @Input() results;
  @Input() xAxis;
  @Input() yAxis;
  @Input() legend;
  @Input() xAxisLabel;
  @Input() yAxisLabel;
}

@Component({
  selector: 'ngx-charts-line-chart',
  template: '',
})
export class LineComponent {
  @Input() scheme;
  @Input() results;
  @Input() xAxis;
  @Input() yAxis;
  @Input() legend;
  @Input() showXAxisLabel;
  @Input() showYAxisLabel;
  @Input() xAxisLabel;
  @Input() yAxisLabel;
}

@Component({
  selector: 'ngx-charts-pie-chart',
  template: '',
})
export class PieComponent {
  @Input() scheme;
  @Input() results;
  @Input() legend;
  @Input() labels;
}

@Component({
  selector: 'ngx-charts-polar-chart',
  template: '',
})
export class PolarComponent {
  @Input() scheme;
  @Input() results;
  @Input() xAxis;
  @Input() yAxis;
  @Input() legend;
  @Input() showXAxisLabel;
  @Input() showYAxisLabel;
  @Input() xAxisLabel;
  @Input() yAxisLabel;
  @Input() autoScale;
}
