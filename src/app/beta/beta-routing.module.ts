import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BetaPageComponent } from './beta-page/beta-page.component';

const routes: Routes = [
  {
    path: '',
    component: BetaPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetaRoutingModule { }
