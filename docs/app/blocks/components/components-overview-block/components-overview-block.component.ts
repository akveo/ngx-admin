import { Component, OnInit } from '@angular/core';

import { NgxMenuService } from '../../../@theme/services/menu.service';

@Component({
  selector: 'ngx-components-overview-block',
  styleUrls: ['./components-overview-block.component.scss'],
  templateUrl: './components-overview-block.component.html',
})
export class NgxComponentsOverviewBlockComponent implements OnInit {
  components: { name: string; icon: string; link: string }[];

  constructor(private menu: NgxMenuService) {}

  ngOnInit() {
    this.components = this.menu
      .getPreparedMenu('/docs')
      .find(({ title }) => title === 'Components')
      .children
      .slice(1)
      .map(({ data: { name, icon, type }, link }) => ({ name, icon, link, group: type === 'group' }));
  }
}
