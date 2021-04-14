import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CinemaRoutingModule } from './cinema-routing.module';
import { AuthComponent } from './pages/auth/auth.component';
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


@NgModule({
  declarations: [
    AuthComponent, 
    HomeComponent, 
    NowPlayingComponent, 
    ComingSoonComponent, 
    PremieresComponent, 
    CartComponent, 
    DetailsComponent, 
    CentralPageComponent,
    MovieComponent,
    
    MovieCardComponent,
  ],
  imports: [
    CommonModule,
    CinemaRoutingModule,
    PrimeNgModule,
    SharedModule
  ]
})
export class CinemaModule { }
