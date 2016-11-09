import { Injectable } from '@angular/core';
import { d3 } from './baD3Chart.loader';

@Injectable()
export class BaD3ChartService{
    public chartSetup:any;
    private width;
    private height;
    private data;
    private xScale;
    private x1Scale;
    private yScale;
    private xAxis;
    private yAxis;
    private margin = {top: 20, right: 20, bottom: 30, left: 40};

    // call method depending on chartType
    drawChart(){
        switch(this.chartSetup.chartType){
            case 'simpleBar':
                this.simpleBar();
                break;
            case 'groupedBar':
                this.groupedBar();
                break;
        }
    }
    resizeChart(){
        switch(this.chartSetup.chartType){
            case 'simpleBar':
                this.simpleBarUpdate();
                break;
            // TODO: groupedBar update on window resize
            // case 'groupedBar':
            //     this.groupedBarUpdate();
            //     break;
        }
    }

    // method to remove chart (called on ngOnDestroy)
    removeChart(){
        d3.select(this.chartSetup.element).selectAll('svg').remove();
    }

    /*
     *
     * SIMPLE BAR CHART
     * 
     *  
    */
    // size and scales setup
    simpleBarSetup(){
        this.width = this.chartSetup.element.clientWidth - this.margin.left - this.margin.right;
        this.height = this.chartSetup.element.clientHeight - this.margin.top - this.margin.bottom;
        
        this.xScale = d3.scaleBand()
                        .rangeRound([0, this.width]).padding(0.1)
                        .domain(this.data.map(d =>d.label));
        this.yScale = d3.scaleLinear()
                        .rangeRound([this.height, 0])
                        .domain([0, d3.max(this.data, d => d.values)]);
        
        this.xAxis = d3.axisBottom(this.xScale);
        this.yAxis = d3.axisLeft(this.yScale)
                        .ticks(10, this.chartSetup.data.yAxisFormat ? this.chartSetup.data.yAxisFormat : "");
    }
    // chart creation and first draw
    simpleBar(){
        // data refactoring
        this.data = this.chartSetup.data.labels.map( (label, i) => {
            return {
                label,
                values: this.chartSetup.data.values[i],
                color: this.chartSetup.data.color[i] || this.chartSetup.data.color[0]
            }
        })

        this.simpleBarSetup();

        var svg = d3.select(this.chartSetup.element);
       
        var g = svg.append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");       

        // x axis
        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + this.height + ")")
            .call(this.xAxis);

        // y axis and label
        g.append("g")
            .attr("class", "axis axis--y")
            .call(this.yAxis)
          .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text(this.chartSetup.data.yAxisLabel);
        
        // chart/bars data
        g.selectAll(".bar")
            .data(this.data)
            .enter().append("rect")
            .attr("class", "bar")
            .style("fill", d => d.color)
            .attr("x", d => this.xScale(d.label))
            .attr("y", d => this.yScale(d.values))
            .attr("width", this.xScale.bandwidth())
            .attr("height", d => this.height - this.yScale(d.values));
        
    }
    // method called on window resize
    simpleBarUpdate(){
        // re-calculate sizes and scales
        this.simpleBarSetup();

        var svg = d3.select(this.chartSetup.element);

        // update x axis
        svg.select(".axis--x")
            .call(this.xAxis)
            .attr("transform", "translate(0," + this.height + ")")

        // update y axis
        svg.select(".axis--y")
            .call(this.yAxis);

        // update chart/bars
        svg.selectAll(".bar")
            .attr("x", d => this.xScale(d.label))
            .attr("width", this.xScale.bandwidth())
            .attr("y", d => this.yScale(d.values))
            .attr("height", d => this.height - this.yScale(d.values));
    }


    /*
     *
     * GROUPED BAR CHART
     * 
     *  
    */
    // size and scales setup
    groupedBarSetup(){
        this.width = this.chartSetup.element.clientWidth - this.margin.left - this.margin.right;
        this.height = this.chartSetup.element.clientHeight - this.margin.top - this.margin.bottom;

        this.xScale = d3.scaleBand()
                        .rangeRound([0, this.width]).padding(0.1)
                        .domain(this.data.map(d => d.label));
        this.x1Scale = d3.scaleBand()
                        .rangeRound([0, this.xScale.bandwidth()])
                        .domain(this.chartSetup.data.legend);

        this.yScale = d3.scaleLinear().range([this.height, 0])
                        .domain([0, d3.max(this.data, d => d3.max(d.values, d => d))]);

        this.xAxis = d3.axisBottom(this.xScale);
        this.yAxis = d3.axisLeft(this.yScale)
                        .tickFormat(d3.format(this.chartSetup.data.yAxisFormat ? this.chartSetup.data.yAxisFormat : ""));
    }
    // chart creation and first draw
    groupedBar(){
        // data refactoring
        this.data = this.chartSetup.data.labels.map( (label, i) => {
            return {
                label,
                values: this.chartSetup.data.values[i],
                color: this.chartSetup.data.color[i] || this.chartSetup.data.color[0]
            }
        })

        this.groupedBarSetup();

        var svg = d3.select(this.chartSetup.element);
       
        var g = svg.append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");  

        // x axis
        g.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + this.height + ")")
            .call(this.xAxis);

        // y axis and labels
        g.append("g")
            .attr("class", "y axis")
            .call(this.yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text(this.chartSetup.data.yAxisLabel);

        // data refactoring 
        var chartData = [];
        this.data.forEach((data, i) => {
            var groupData = data.values.map((value, j) => {
                    return {
                        legend: this.chartSetup.data.legend[j],
                        label: this.chartSetup.data.labels[i],
                        values: value,
                        color: this.chartSetup.data.color[j]
                    }
            })
            chartData.push(groupData);
        })

        // bars
        var groups = g.selectAll(".groups")
            .data(this.data)
            .enter().append("g")
            .attr("class", "group")
            .attr("transform", d => { return "translate(" + this.xScale(d.label) + ",0)"; });
        
        groups.selectAll("rect")
            .data((d,i) => chartData[i])
            .enter().append("rect")
            .attr("class", "bar")
            .attr("width", this.x1Scale.bandwidth())
            .attr("x", d => this.x1Scale(d.legend))
            .attr("y", d => this.yScale(d.values))
            .attr("height", d => this.height - this.yScale(d.values))
            .style("fill", d => d.color);

        // legend
        var legend = svg.selectAll(".legend")
            .data(this.chartSetup.data.legend.slice().reverse())
            .enter().append("g")
            .attr("class", "legend")
            .attr("transform", (d,i) => "translate(0," + i * 20 + ")");

        legend.append("rect")
            .attr("x", this.width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", (d,i) => this.chartSetup.data.color[i]);

        legend.append("text")
            .attr("x", this.width - 24)
            .attr("y", 9)
            .attr("dy", ".35em")
            .style("text-anchor", "end")
            .text(d => d);

        
    }

}