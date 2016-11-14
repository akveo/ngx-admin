import {
    Component,
    ViewChild,
    ViewEncapsulation,
    Input,
    Output,
    EventEmitter,
    AfterViewInit,
    ElementRef
} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

import {BaD3ChartService} from './baD3Chart.service';
import {d3} from './baD3Chart.loader';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'ba-d3-chart',
    template: require('./baD3Chart.html'),
    styles: [require('./baD3Chart.scss')],
    providers: [BaD3ChartService]
})
export class BaD3Chart {

    @Input()  baD3ChartType:string;
    @Input()  baD3ChartData:any;
    @Output() onChartReady = new EventEmitter<any>();

    @ViewChild('baD3Chart') private _selector:ElementRef;

    resizeCheck:Subscription;

    constructor(private _chartService:BaD3ChartService) {
    }

    setup():void {
        this._chartService.chartSetup = {
            element: this._selector.nativeElement,
            data: this.baD3ChartData,
            chartType: this.baD3ChartType 
        }
    }

    ngAfterViewInit():void {

        this.setup();
        this._chartService.drawChart();
        
        // re-draw charts on window resize
        this.resizeCheck = Observable.fromEvent(window, 'resize')
            .map((res:any) => res.target.innerWidth)
            .distinctUntilChanged()
            .subscribe(res => {
                this._chartService.resizeChart();
            })

    }

    ngOnDestroy():void {
        this._chartService.removeChart();
        this.resizeCheck.unsubscribe();
    }


}