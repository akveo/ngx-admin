import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

import {d3} from './baD3Chart.loader';

@Injectable()
export class BaD3ChartService {

  private margin = { top: 20, right: 20, bottom: 30, left: 40 };

  // call method depending on chartType
  public drawChartNew({chartType, element, inputData}) {
    switch (chartType) {
      case 'simpleBar':
        return this.simpleBarDraw({ element, inputData });
      case 'groupedBar':
        return this.groupedBarDraw({ element, inputData });
    }
  }

  // remove chart
  public removeChart(element) {
    d3.select(element).selectAll('svg').remove();
  }

  /*
   *
   * SIMPLE BAR CHART
   * 
   *  
  */

  // simpleBar chart initial setup 
  private simpleBarSetup({element, inputData, data}) {
    let width = element.clientWidth - this.margin.left - this.margin.right;
    let height = element.clientHeight - this.margin.top - this.margin.bottom;

    let xScale = d3.scaleBand()
      .rangeRound([0, width]).padding(0.1)
      .domain(data.map(d => d.label));
    let yScale = d3.scaleLinear()
      .rangeRound([height, 0])
      .domain([0, d3.max(data, d => d.values)]);

    let xAxis = d3.axisBottom(xScale);
    let yAxis = d3.axisLeft(yScale)
      .ticks(10, inputData.yAxisFormat ? inputData.yAxisFormat : '');

    return {
      width, height,
      xScale, yScale,
      xAxis, yAxis
    }
  }

  // simpleBar chart initial draw
  private simpleBarDraw({element, inputData}) {
    // data refactoring
    let data = inputData.labels.map((label, i) => {
      return {
        label,
        values: inputData.values[i],
        color: inputData.color[i] || inputData.color[0]
      }
    });

    // initial setup
    let chartSetup = this.simpleBarSetup({element, inputData, data});

    let svg = d3.select(element);

    let g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    // x axis
    g.append('g')
      .attr('class', 'axis axis--x')
      .attr('transform', 'translate(0,' + chartSetup.height + ')')
      .call(chartSetup.xAxis);

    // y axis and label
    g.append('g')
      .attr('class', 'axis axis--y')
      .call(chartSetup.yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '0.71em')
      .attr('text-anchor', 'end')
      .text(inputData.yAxisLabel);

    // chart/bars data
    g.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .style('fill', d => d.color)
      .attr('x', d => chartSetup.xScale(d.label))
      .attr('y', d => chartSetup.yScale(d.values))
      .attr('width', chartSetup.xScale.bandwidth())
      .attr('height', d => chartSetup.height - chartSetup.yScale(d.values));

    // redraw chart on window resize
    // Observable is returned to be able to unsubscribe
    return Observable.fromEvent(window, 'resize')
      .map((res:any) => res.target.innerWidth)
      .distinctUntilChanged()
      .subscribe(width => {
        this.simpleBarUpdate({ element, inputData, data });
      });
  }

  // simpleBar chart responsive redraw
  private simpleBarUpdate({element, inputData, data}) {
    // re-calculate sizes and scales
    let chartSetup = this.simpleBarSetup({element, inputData, data});

    let svg = d3.select(element);

    // update x axis
    svg.select('.axis--x')
      .call(chartSetup.xAxis)
      .attr('transform', 'translate(0,' + chartSetup.height + ')');

    // update y axis
    svg.select('.axis--y')
      .call(chartSetup.yAxis);

    // update chart/bars
    svg.selectAll('.bar')
      .attr('x', d => chartSetup.xScale(d.label))
      .attr('width', chartSetup.xScale.bandwidth())
      .attr('y', d => chartSetup.yScale(d.values))
      .attr('height', d => chartSetup.height - chartSetup.yScale(d.values));
  }

  /*
   *
   * GROUPED BAR CHART
   * 
   *  
  */

  // groupedBar chart initial setup
  private groupedBarSetup({element, inputData, data}) {
    let width = element.clientWidth - this.margin.left - this.margin.right;
    let height = element.clientHeight - this.margin.top - this.margin.bottom;

    let xScale = d3.scaleBand()
      .rangeRound([0, width]).padding(0.1)
      .domain(data.map(d => d.label));
    let x1Scale = d3.scaleBand()
      .rangeRound([0, xScale.bandwidth()])
      .domain(inputData.legend);

    let yScale = d3.scaleLinear().range([height, 0])
      .domain([0, d3.max(data, d => d3.max(d.values, d => d))]);

    let xAxis = d3.axisBottom(xScale);
    let yAxis = d3.axisLeft(yScale)
      .tickFormat(d3.format(inputData.yAxisFormat ? inputData.yAxisFormat : ''));

    return {
      width, height,
      xScale, x1Scale, yScale,
      xAxis, yAxis
    }
  }

  // groupedBar chart initial draw
  private groupedBarDraw({element, inputData}) {
    // data refactoring
    let data = inputData.labels.map((label, i) => {
      return {
        label,
        values: inputData.values[i],
        color: inputData.color[i] || inputData.color[0]
      }
    });

    // initial setup
    let chartSetup = this.groupedBarSetup({ element, inputData, data });

    let svg = d3.select(element);

    let g = svg.append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    // x axis
    g.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + chartSetup.height + ')')
      .call(chartSetup.xAxis);

    // y axis and labels
    g.append('g')
      .attr('class', 'y axis')
      .call(chartSetup.yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text(inputData.yAxisLabel);

    // data refactoring 
    let chartData = [];
    data.forEach((data, i) => {
      let groupData = data.values.map((value, j) => {
        return {
          legend: inputData.legend[j],
          label: inputData.labels[i],
          values: value,
          color: inputData.color[j]
        }
      });
      chartData.push(groupData);
    });

    // bars
    let groups = g.selectAll('.groups')
      .data(data)
      .enter().append('g')
      .attr('class', 'group')
      .attr('transform', d => { return 'translate(' + chartSetup.xScale(d.label) + ',0)'; });

    groups.selectAll('rect')
      .data((d, i) => chartData[i])
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('width', chartSetup.x1Scale.bandwidth())
      .attr('x', d => chartSetup.x1Scale(d.legend))
      .attr('y', d => chartSetup.yScale(d.values))
      .attr('height', d => chartSetup.height - chartSetup.yScale(d.values))
      .style('fill', d => d.color);

    // legend
    let legend = svg.selectAll('.legend')
      .data(inputData.legend.slice().reverse())
      .enter().append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => 'translate(0,' + i * 20 + ')');

    legend.append('rect')
      .attr('x', chartSetup.width - 5)
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', (d, i) => inputData.color[i]);

    legend.append('text')
      .attr('x', chartSetup.width - 9)
      .attr('y', 9)
      .attr('dy', '.35em')
      .style('text-anchor', 'end')
      .text(d => d);

    // redraw chart on window resize
    // Observable is returned to be able to unsubscribe
    return Observable.fromEvent(window, 'resize')
      .map((res: any) => res.target.innerWidth)
      .distinctUntilChanged()
      .subscribe(width => {
        this.groupedBarUpdate({element, inputData, data});
      });
  }

  // groupedBar chart responsive redraw
  private groupedBarUpdate({element, inputData, data}) {
    // re-calculate sizes and scales
    let chartSetup = this.groupedBarSetup({ element, inputData, data });

    let svg = d3.select(element);

    // x axis
    svg.select('.x.axis')
      .attr('transform', 'translate(0,' + chartSetup.height + ')')
      .call(chartSetup.xAxis);

    // y axis and labels
    svg.select('.y.axis')
      .call(chartSetup.yAxis);

    // bars
    svg.selectAll('.group')
      .attr('transform', d => { return 'translate(' + chartSetup.xScale(d.label) + ',0)'; });

    svg.selectAll('.bar')
      .attr('width', chartSetup.x1Scale.bandwidth())
      .attr('x', d => chartSetup.x1Scale(d.legend))
      .attr('y', d => chartSetup.yScale(d.values))
      .attr('height', d => chartSetup.height - chartSetup.yScale(d.values));

    // legend
    svg.selectAll('.legend rect')
      .attr('x', chartSetup.width - 5);
    svg.selectAll('.legend text')
      .attr('x', chartSetup.width - 9);
  }
}