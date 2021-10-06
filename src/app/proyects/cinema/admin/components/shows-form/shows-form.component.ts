import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Show, Movie, CrudMovie, Room } from '../../../interfaces/interfaces';
import { MovieService } from '../../../services/movie.service';
import { RoomService } from '../../../services/room.service';
import { ShowService } from '../../../services/show.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shows-form',
  templateUrl: './shows-form.component.html',
  styleUrls: ['./shows-form.component.css']
})
export class ShowsFormComponent implements OnInit {

  moviesData!: Movie[];
  roomsData!: Room[];

  @Input() showData!: Show;

  myForm: FormGroup = this.fb.group({
    price: [, [Validators.required, Validators.min(1)]],
    start_time: [, [Validators.required]],
    end_time: [, [Validators.required]],
    day: [, [Validators.required]],
    id_room: [, Validators.required],
    id_movie: [, Validators.required]
  });

  get id_movie(){
    return this.myForm.get('id_movie');
  }

  movie(e:any){
    
    this.id_movie?.setValue( e.target.value, {
      onlySelf: true
    });
  }

  get id_room(){
    return this.myForm.get('id_room');
  }

  room(e:any){
    
    this.id_room?.setValue( e.target.value, {
      onlySelf: true
    });
  }

  constructor( private fb: FormBuilder,
               private showSvc: ShowService,
               private movieSvc: MovieService,
               private roomSvc: RoomService,
               private router: Router) { }

  ngOnInit(): void {

    if(this.showData){

      this.formData(this.showData);
      
    }

    this.movieSvc.getMovies()
      .subscribe( resp => {
        this.moviesData = resp.moviesData || [];        
      });

      this.roomSvc.getRooms()
        .subscribe( resp =>{
          this.roomsData = resp.roomsData || [];
        })
  }

  save(){
    
   const { price, start_time, end_time, day, id_room, id_movie } = this.myForm.value; 
    this.showSvc.saveShow( price, start_time, end_time, day, id_room, id_movie )
      .subscribe( ok =>{ 

        if(ok){

          this.router.navigateByUrl('/proyects/cinema/admin/shows');
          alert('Show has been saved!');

        }else{
          alert(ok);
        }
      })
  }

  delete(){

    console.log(this.showData.id);
    
    this.showSvc.deleteShow(this.showData.id)
      .subscribe( ok =>{

        if(ok){
          alert('Show has ben deleted!');
          this.router.navigateByUrl('/proyects/cinema/admin/shows');
        }else{
          alert(ok);
        }
      })
  }

  formData(data:Show){

    this.myForm.reset({
      start_time: data.start_time,
      end_time: data.end_time,
      day: new Date(data.day),
      id_room: data.id_room,
      id_movie: data.id_movie
    });
  }

}
