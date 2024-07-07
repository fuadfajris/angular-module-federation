import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartFeatureComponent } from './chart-feature.component';

const routes: Routes = [
  {
    path: '',
    component: ChartFeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartFeatureRoutingModule { }
