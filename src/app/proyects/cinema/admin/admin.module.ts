import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { RoomComponent } from './pages/room/room.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { PurchasesComponent } from './pages/purchases/purchases.component';
import { UsersComponent } from './pages/users/users.component';
import { MenubarComponent } from './shared/menubar/menubar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { MovieShowComponent } from './pages/movie-show/movie-show.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent, 
    MovieComponent, 
    MoviesComponent, 
    RoomComponent, 
    RoomsComponent, 
    PurchasesComponent, 
    UsersComponent,
    MenubarComponent, 
    FooterComponent, 
    MovieShowComponent, 
    ShowsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimeNgModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
