import {Injectable} from '@angular/core';

@Injectable()
export class MorrisService {
  public static getBarChartData(){
    return  [{
      year: '2006',
      'Serie A': 100,
      'Serie B': 80,
    },{
      year: '2007',
      'Serie A': 75,
      'Serie B': 65,
    },{
      year: '2008',
      'Serie A': 50,
      'Serie B': 40,
    },{
      year: '2009',
      'Serie A': 75,
      'Serie B': 65,
    },{
      year: '2010',
      'Serie A': 50,
      'Serie B': 40,
    },{
      year: '2011',
      'Serie A': 75,
      'Serie B': 65,
    },{
      year: '2012',
      'Serie A': 100,
      'Serie B': 90,
    }];
  }

  public static getDonutChartData(){
    return [
      {value: 12, label: 'Download Sales'},
      {value: 20, label: 'Mail-Order Sales'},
      {value: 30, label: 'In-Store Sales'}

    ];
  }

  public static getLineChartData(){
    return [{
      year: '2006',
      'Serie A': 100,
      'Serie B': 80,
    },{
      year: '2007',
      'Serie A': 75,
      'Serie B': 65,
    },{
      year: '2008',
      'Serie A': 50,
      'Serie B': 40,
    },{
      year: '2009',
      'Serie A': 75,
      'Serie B': 65,
    },{
      year: '2010',
      'Serie A': 50,
      'Serie B': 40,
    },{
      year: '2011',
      'Serie A': 75,
      'Serie B': 65,
    },{
      year: '2012',
      'Serie A': 100,
      'Serie B': 90,
    }];
  }

}
