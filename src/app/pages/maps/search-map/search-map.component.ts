import { Component } from '@angular/core';
import { PositionModel } from './entity/position.model';

@Component({
  selector: 'ngx-search-map',
  templateUrl: './search-map.component.html',
})
export class SearchMapComponent {
  public searchedPosition: PositionModel = new PositionModel();

  public setPosition(position: PositionModel): void {
    this.searchedPosition = position;
  }
}
