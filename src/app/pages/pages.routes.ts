import {RouterConfig} from '@angular/router';
import {Dashboard} from './dashboard/dashboard.component';
import {Charts} from './charts/charts.component';
import {ChartistJs} from './charts/components/chartistJs/chartistJs.component';
import {Pages} from './pages.component';
import {Ui} from './ui/ui.component';
import {Typography} from './ui/components/typography/typography.component';
import {Buttons} from './ui/components/buttons/buttons.component';
import {Icons} from './ui/components/incons/icons.component';
import {Grid} from './ui/components/grid/grid.component';
import {Forms} from './forms/forms.component';
import {Inputs} from './forms/components/inputs/inputs.component';
import {Layouts} from './forms/components/layouts/layouts.component';
import {BasicTables} from './tables/components/basicTables/basicTables.component';
import {Tables} from './tables/tables.component';
import {Maps} from './maps/maps.component';
import {GoogleMaps} from './maps/components/googleMaps/googleMaps.component';
import {LeafletMaps} from './maps/components/leafletMaps/leafletMaps.component';
import {BubbleMaps} from './maps/components/bubbleMaps/bubbleMaps.component';
import {LineMaps} from './maps/components/lineMaps/lineMaps.component';
import {Editors} from './editors/editors.component';
import {Ckeditor} from './editors/components/ckeditor/ckeditor.component';

//noinspection TypeScriptValidateTypes
export const PagesRoutes:RouterConfig = [
  {
    path: 'pages',
    component: Pages,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'editors',
        component: Editors,
        children: [
          {
            path: 'ckeditor',
            component: Ckeditor
          }
        ]
      },
      {
        path: 'charts',
        component: Charts,
        children: [
          {
            path: 'chartist-js',
            component: ChartistJs
          }
        ]
      },
      {
        path: 'ui',
        component: Ui,
        children: [
          {
            path: 'typography',
            component: Typography
          },
          {
            path: 'buttons',
            component: Buttons
          },
          {
            path: 'icons',
            component: Icons
          },
          {
            path: 'grid',
            component: Grid
          },
        ]
      },
      {
        path: 'forms',
        component: Forms,
        children: [
          {
            path: 'inputs',
            component: Inputs
          },
          {
            path: 'layouts',
            component: Layouts
          }
        ]
      },
      {
        path: 'tables',
        component: Tables,
        children: [
          {
            path: 'basictables',
            component: BasicTables
          }
        ]
      },
      {
        path: 'maps',
        component: Maps,
        children: [
          {
            path: 'googlemaps',
            component: GoogleMaps
          },
          {
            path: 'leafletmaps',
            component: LeafletMaps
          },
          {
            path: 'bubblemaps',
            component: BubbleMaps
          },
          {
            path: 'linemaps',
            component: LineMaps
          }
        ]
      },
    ]
  }
];
