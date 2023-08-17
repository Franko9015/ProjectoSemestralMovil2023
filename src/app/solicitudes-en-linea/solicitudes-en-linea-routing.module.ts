import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudesEnLineaPage } from './solicitudes-en-linea.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudesEnLineaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudesEnLineaPageRoutingModule {}
