import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudesEnLineaPageRoutingModule } from './solicitudes-en-linea-routing.module';

import { SolicitudesEnLineaPage } from './solicitudes-en-linea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudesEnLineaPageRoutingModule
  ],
  declarations: [SolicitudesEnLineaPage]
})
export class SolicitudesEnLineaPageModule {}
