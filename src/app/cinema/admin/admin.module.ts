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
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { MovieShowComponent } from './pages/movie-show/movie-show.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { MovieFormComponent } from './components/movie-form/movie-form.component';
import { RoomFormComponent } from './components/room-form/room-form.component';
import { AddRoomComponent } from './pages/add-room/add-room.component';
import { ShowsFormComponent } from './components/shows-form/shows-form.component';
import { AddShowComponent } from './pages/add-show/add-show.component';
import { HourPipe } from './pipes/hour.pipe';


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
    ShowsComponent, 
    AddMovieComponent, 
    MovieFormComponent, 
    RoomFormComponent, 
    AddRoomComponent, 
    ShowsFormComponent,
    AddShowComponent,
    HourPipe
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
