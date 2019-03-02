import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OutlineData, VisitorsAnalyticsData } from '../data/visitors-analytics';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VisitorsAnalyticsService extends VisitorsAnalyticsData {

	constructor(private http: HttpClient) {
		super();
	}

	getInnerLineChartData(): Observable<number[]> {
		console.log("getInnerLineChartData");
		return this.http.get('/api/chart/inner.json') as Observable<number[]>;
	}

	getOutlineLineChartData(): Observable<OutlineData[]> {
		return this.http.get('/api/chart/outline.json') as Observable<OutlineData[]>;
	}

	getPieChartData(): Observable<number> {
		return this.http.get('/api/chart/pie.json') as Observable<number>;
	}
}
