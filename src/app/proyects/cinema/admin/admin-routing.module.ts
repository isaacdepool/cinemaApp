import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { RoomComponent } from './pages/room/room.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { PurchasesComponent } from './pages/purchases/purchases.component';
import { UsersComponent } from './pages/users/users.component';
import { ValidarTokenGuard } from './guards/validar-token.guard';
import { ValidateTypeGuard } from './guards/validate-type.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import ('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: '', 
    component: HomeComponent,
    children: [
      {
        path: 'movie/:id', component: MovieComponent
      },
      {
        path: 'movies', component: MoviesComponent
      },
      {
        path: 'room/:id', component: RoomComponent
      },
      {
        path: 'rooms', component: RoomsComponent
      },
      {
        path: 'purchases', component: PurchasesComponent
      },
      {
        path: 'movie-shows', component: PurchasesComponent
      },
      {
        path: 'shows', component: PurchasesComponent
      },
      {
        path: 'users', component: UsersComponent,
        canActivate: [ ValidateTypeGuard ],
        canLoad: [ ValidateTypeGuard ],
      }
    ],
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
