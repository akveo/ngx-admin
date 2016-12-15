import { Routes, RouterModule } from '@angular/router';

import { Ui } from './ui.component';
import { Buttons } from './components/buttons/buttons.component';
import { Grid } from './components/grid/grid.component';
import { Icons } from './components/icons/icons.component';
import { Modals } from './components/modals/modals.component';
import { Typography } from './components/typography/typography.component';
import { SweetAlert } from './components/sweetAlert/sweetAlert.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Ui,
    children: [
      { path: 'buttons', component: Buttons },
      { path: 'grid', component: Grid },
      { path: 'icons', component: Icons },
      { path: 'typography', component: Typography },
      { path: 'modals', component: Modals },
      { path: 'sweetAlert', component: SweetAlert }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
