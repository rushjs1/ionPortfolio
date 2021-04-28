import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltHomePage } from './alt-home.page';

const routes: Routes = [
  {
    path: '',
    component: AltHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltHomePageRoutingModule {}
