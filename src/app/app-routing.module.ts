import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'proyects',
    loadChildren: () => import('./proyects/proyects.module').then( m => m.ProyectsModule )
  },
  {
    path: '**',
    redirectTo: 'proyects'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
