import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {flatMap, map, takeWhile} from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import {UserService} from "../../@core/services/users.service";
import {Observable} from "rxjs";
import {UserCount} from "../../@core/models/user.model";

interface CardSettings {
  title?: string;
  iconClass?: string;
  type?: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {

  private alive = true;

  solarValue: number;


  statusCards: CardSettings[] = [];


  constructor(private themeService: NbThemeService,
              private solarService: SolarData, private userService:UserService) {

    this.buildCards().subscribe((statusCards:CardSettings[])=>{
      this.themeService.getJsTheme()
        .pipe(takeWhile(() => this.alive))
        .subscribe(theme => {
          this.statusCards = statusCards;
        });

      this.solarService.getSolarData()
        .pipe(takeWhile(() => this.alive))
        .subscribe((data) => {
          this.solarValue = data;
        });

    });

  }


  buildCards():Observable<CardSettings[]>{
      return this.userService.getUserCount().pipe(map((count:UserCount) =>{
        return [{
          title: 'Total User '+count.totalCount,
          iconClass: 'nb-person',
          type: 'primary',
        },{
          title: 'Todays register '+count.todaysRegister,
          iconClass: 'nb-plus',
          type: 'primary'
        }];
      }));
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
