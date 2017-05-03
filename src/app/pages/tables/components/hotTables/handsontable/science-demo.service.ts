let heatmap = [];

export function updateHeatmap(change, source) {
  if (change && change.length) {
    heatmap[change[0][1]] = generateHeatmapData(this, change[0][1]);
  } else {
    heatmap = [];

    for (let i = 1, colCount = this.countCols(); i < colCount; i++) {
      heatmap[i] = generateHeatmapData(this, i);
    }
  }
}

export function point(min, max, value) {
  return (value - min) / (max - min);
}

export function generateHeatmapData(context:any, colId) {
  let values = context.getDataAtCol(colId);

  return {
    min: Math.min.apply(null, values),
    max: Math.max.apply(null, values)
  };
}