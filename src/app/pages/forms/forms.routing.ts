import { Routes, RouterModule }  from '@angular/router';

import { Forms } from './forms.component';
import { Inputs } from './components/inputs/inputs.component';
import { Layouts } from './components/layouts/layouts.component';
import { IndicationComponent } from './components/ter-forms/indications/indication.component';
import { CadasterComponent } from './components/ter-forms/cadaster/cadaster.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Forms,
    children: [
      { path: 'inputs', component: Inputs },
      { path: 'layouts', component: Layouts },
      { path: 'indications', component: IndicationComponent },
      { path: 'cadaster', component: CadasterComponent  }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
