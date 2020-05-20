import { Component, OnInit } from '@angular/core';
import { MetadataService } from '../../../../../../src/app/@core/utils/metadata.service';

@Component({
  selector: 'ngx-material-admin-info',
  templateUrl: './material-info.component.html',
  styleUrls: ['./../main-info-section.component.scss'],
})
export class MaterialAdminInfoComponent implements OnInit {

  constructor(private metaDataService: MetadataService) {}

  ngOnInit(): void {
    this.metaDataService.updateTitle('Ngx-admin material dashboard template based on Angular 9+ and Bootstrap 4+');
    this.metaDataService.updateDescription('Ngx-admin material works perfectly with Angular Material and Nebular.' +
      ' Over 40+ Angular Components and 60+ Usage Examples.Take the best from both!');
    this.metaDataService.updateKeywords('Ngx-admin material theme, ngx-admin material dashboard, ngx-admin material');
  }
}
