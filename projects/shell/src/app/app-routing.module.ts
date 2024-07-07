import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('menu1/Module').then(m => m.ChartFeatureModule)
  },
  {
    path: 'menu1',
    loadChildren: () => import('menu1/Module').then(m => m.ChartFeatureModule)
  },
  {
    path: 'menu2',
    loadChildren: () => import('menu2/Module').then(m => m.CrudfeatureModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
