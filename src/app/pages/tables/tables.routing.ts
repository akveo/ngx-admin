import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablesComponent } from './tables.component';
import { BasicTablesComponent } from './components/basic-tables/basic-tables.component';
import { SmartTablesComponent } from './components/smart-tables/smart-tables.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
    children: [
      { path: 'basictables', component: BasicTablesComponent },
      { path: 'smarttables', component: SmartTablesComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
