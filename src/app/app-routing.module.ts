import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },
  {
    path: 'test1',
    loadChildren: () => import('./test1/test1.module').then(m => m.TEST1PageModule)
  },
  {
    path: 'malla-curricular',
    loadChildren: () => import('./malla-curricular/malla-curricular.module').then(m => m.MallaCurricularPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./bienvenida/bienvenida.module').then(m => m.BienvenidaPageModule)
  },
  {
    path: 'solicitudes-en-linea',
    loadChildren: () => import('./solicitudes-en-linea/solicitudes-en-linea.module').then(m => m.SolicitudesEnLineaPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

