import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { OrdersChart, OrdersChartService } from './orders-chart.service';
import { ProfitChart, ProfitChartService } from './profit-chart.service';

export class OrderProfitChartSummary {
  title: string;
  value: number;
}

@Injectable()
export class OrdersProfitChartService {

  private summary = [
    {
      title: 'Marketplace',
      value: 3654,
    },
    {
      title: 'Last Month',
      value: 946,
    },
    {
      title: 'Last Week',
      value: 654,
    },
    {
      title: 'Today',
      value: 230,
    },
  ];

  constructor(private ordersChartService: OrdersChartService,
              private profitChartService: ProfitChartService) {
  }

  getOrderProfitChartSummary(): Observable<OrderProfitChartSummary[]> {
    return observableOf(this.summary);
  }

  getOrdersChartData(period: string): Observable<OrdersChart> {
    return observableOf(this.ordersChartService.getOrdersChartData(period));
  }

  getProfitChartData(period: string): Observable<ProfitChart> {
    return observableOf(this.profitChartService.getProfitChartData(period));
  }
}
