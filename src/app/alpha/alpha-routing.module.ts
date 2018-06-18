import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlphaPageComponent } from './alpha-page/alpha-page.component';

const routes: Routes = [
  {
    path: '',
    component: AlphaPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlphaRoutingModule { }
