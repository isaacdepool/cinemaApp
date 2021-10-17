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
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { AddRoomComponent } from './pages/add-room/add-room.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { MovieShowComponent } from './pages/movie-show/movie-show.component';
import { AddShowComponent } from './pages/add-show/add-show.component';

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
        path: 'add-movie', component: AddMovieComponent
      },
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
        path: 'add-room', component: AddRoomComponent
      },
      {
        path: 'purchases', component: PurchasesComponent
      },
      {
        path: 'movie-show/:id', component: MovieShowComponent
      },
      {
        path: 'add-shows', component: AddShowComponent
      },
      {
        path: 'shows', component: ShowsComponent
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
