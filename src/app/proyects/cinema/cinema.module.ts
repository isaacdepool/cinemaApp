import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NowPlayingComponent } from './pages/now-playing/now-playing.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { PremieresComponent } from './pages/premieres/premieres.component';
import { CartComponent } from './pages/cart/cart.component';
import { DetailsComponent } from './pages/details/details.component';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { CentralPageComponent } from './pages/central-page/central-page.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { AuthModule } from './auth/auth.module';
import { HourPipe } from './pipes/hour.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './pages/show/show.component';


@NgModule({
  declarations: [
    HomeComponent, 
    NowPlayingComponent, 
    ComingSoonComponent, 
    PremieresComponent, 
    CartComponent, 
    DetailsComponent, 
    CentralPageComponent,
    MovieComponent,
    MovieCardComponent,
    ShowComponent,
    HourPipe
  ],
  exports:[
    HourPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CinemaRoutingModule,
    PrimeNgModule,
    SharedModule,
    AuthModule,
  ]
})
export class CinemaModule { }
