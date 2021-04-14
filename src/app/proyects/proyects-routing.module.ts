import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cinema',
    loadChildren: () => import('./cinema/cinema.module').then( m => m.CinemaModule ) 
  },
  {
    path: '**',
    redirectTo: 'cinema'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectsRoutingModule { }
