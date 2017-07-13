import { Component } from '@angular/core';
import * as Handsontable from 'handsontable/dist/handsontable.full.js';
import { getScienceData } from './data';
import { updateHeatmap } from './science-demo.service';
import { point } from './science-demo.service';
import { generateHeatmapData } from './science-demo.service';

let heatmapScale = chroma.scale(['#17F556', '#ED6D47']);
let heatmap = [];

function heatmapRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);

  if (heatmap[col]) {
    td.style.backgroundColor = heatmapScale(point(heatmap[col].min, heatmap[col].max, parseFloat(value))).hex();
    td.style.textAlign = 'right';
    td.style.fontWeight = 'bold';
  }
}

@Component({
  selector: 'science-demo',
  templateUrl: './science-demo.html'
})
export class ScienceDemoComponent {
   data:Array<any>;
   options:any;

  constructor() {
    this.data = getScienceData();
    this.options = {
      height: 600,
      colHeaders: ['Line chart', 'Frequency', 'Average age', 'Frequency', 'Average age'],
      rowHeaders: true,
      stretchH: 'all',
      columnSorting: true,
      columns: [
        {data: 0, renderer: 'html'},
        {data: 1, type: 'numeric', format: '0[.]000000000000000'},
        {data: 2, type: 'numeric', format: '0[.]000000000000000', renderer: heatmapRenderer},
        {data: 3, type: 'numeric', format: '0[.]000000000000000'},
        {data: 4, type: 'numeric', format: '0[.]000000000000000', renderer: heatmapRenderer}
      ],
      afterLoadData: updateHeatmap,
      beforeChangeRender: updateHeatmap,
      mergeCells: [
        {row: 0, col: 0, rowspan: 20, colspan: 1}
      ]
    };
  }
}
