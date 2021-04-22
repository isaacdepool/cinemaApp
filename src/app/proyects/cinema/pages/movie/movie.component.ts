import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/interfaces';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  isCalendar: boolean = true;
  iconHour: string = 'pi pi-circle-off';
  idMovie: string = '';

  moviesData: Movie[] = [];
  movieData!: Movie;
  isData: boolean = false;
  params: any;

  constructor( private activatedRoute: ActivatedRoute,
               private movieSvc: MovieService,
               private filterSvc: FilterService,
               private router: Router ) {   
                
        this.activatedRoute.paramMap.subscribe( resp => {
          
          this.idMovie = resp.get('id') || '';
        }); 

        this.movieSvc.getMovies().subscribe( resp =>{
    
          this.moviesData = (resp.moviesData) || [];

          this.moviesData = this.filterSvc.filter(this.moviesData, this.idMovie);
          this.movieData = this.moviesData[0];

          if(this.movieData){
            this.isData = true;
            if(this.movieData.role === 'COMING-SOON'){
              this.isCalendar = false;  
            }

          }else this.router.navigateByUrl('/proyects/cinema/home');

        });
        
      }
      
    ngOnInit(): void {
        
      
  }

  calendar(){
    this.isCalendar = true;
  }

  synopsis(){
    this.isCalendar = false;
  }

  selectHour(){

    if(this.iconHour === 'pi pi-circle-off'){

      this.iconHour = 'pi pi-check'

    }else{
      this.iconHour = 'pi pi-circle-off'
    }
  }

}
