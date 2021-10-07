import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie, Show } from '../../interfaces/interfaces';
import { FilterService } from '../../services/filter.service';
import { ShowService } from '../../services/show.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  showData: Show[] = [];
  showHours: any[] = [];
  showDays: any[] = [];
  isData: boolean = false;
  params: any;

  ok: boolean = false;
  isShow: boolean = false;

  myForm: FormGroup = this.fb.group({
    id: [, Validators.required],
  })

  constructor( private activatedRoute: ActivatedRoute,
               private movieSvc: MovieService,
               private filterSvc: FilterService,
               private showMovie: ShowService,
               private fb: FormBuilder,
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

            this.showMovie.getShows()
              .subscribe( resp =>{

                if(resp.ok){
                  for(let [i, show] of resp.movieShows.entries()){
  
                    if(show.id_movie === this.movieData.id){
  
                      this.showData.push(show);
                      
                      this.ok = true;
                      this.showHours[0] = this.showData[0];
  
                      
                    }
                }

                const e = { value: this.showData[0].day}
                this.h(e);
                this.isShow = true;

                }

                for(let i=0; i<this.showData.length; i++){

                  const element = this.showData[i].day;

                    if(!this.showDays.includes(element)){
                      
                      this.showDays.push(element);
                      
                    }
                }
              });

          }else this.router.navigateByUrl('/proyects/cinema/home');
 
        });
        
      }
      
    ngOnInit(): void {
        
  }

  h(e:any){

    
    this.showHours = [];
    
    for(let data of this.showData){
      
      if( data.day === e.value ){
        this.showHours.push(data);
        this.ok = true;
      }
    }
  }

  selectShow(e:any){
    console.log(this.myForm.value.id.id);
    
    
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
