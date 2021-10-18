import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Show, Movie, CrudMovie, Room } from '../../../interfaces/interfaces';
import { MovieService } from '../../../services/movie.service';
import { RoomService } from '../../../services/room.service';
import { ShowService } from '../../../services/show.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-shows-form',
  templateUrl: './shows-form.component.html',
  styleUrls: ['./shows-form.component.css']
})
export class ShowsFormComponent implements OnInit {

  moviesData!: Movie[];
  roomsData!: Room[];

  @Input() showData!: Show;

  ok: boolean = false;

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
        });
  }

  update(){

    this.moment();
   
   if(this.ok == true){     

     const { price, start_time, end_time, day, id_room, id_movie } = this.myForm.value; 
      this.showSvc.updateShow( this.showData.id, price, start_time, end_time, day, id_room, id_movie )
        .subscribe( resp =>{ 
  
          if(resp.ok){
  
            this.router.navigateByUrl('/admin/shows');
            alert('Show has been update and saved!');
  
          }else{ 
            alert(resp.msg);
          }
        });

   }else{

      this.myForm.controls['start_time'].reset();
      this.myForm.controls['end_time'].reset();
      alert('Start has to be greater than the end');
   }

  }

  save(){

   this.moment();
   
   if(this.ok == true){     

     const { price, start_time, end_time, day, id_room, id_movie } = this.myForm.value; 
      this.showSvc.saveShow( price, start_time, end_time, day, id_room, id_movie )
        .subscribe( resp =>{ 
  
          if(resp.ok){
  
            this.router.navigateByUrl('/admin/shows');
            alert('Show has been saved!');
  
          }else{ 
            alert(resp.msg);
          }
        });

   }else{

      this.myForm.controls['start_time'].reset();
      this.myForm.controls['end_time'].reset();
      alert('Start has to be greater than the end');
   }
    
  }

  delete(){

    this.showSvc.deleteShow(this.showData.id)
      .subscribe( ok =>{

        if(ok){
          alert('Show has ben deleted!');
          this.router.navigateByUrl('/admin/shows');
        }else{
          alert(ok);
        }
      })
  }

  moment(){

    console.log(this.myForm.value.start_time);
    
     var start = moment(this.myForm.value.start_time).format('HH:mm');
     var end = moment(this.myForm.value.end_time).format('HH:mm');

     if(start < end){
      this.ok = true;
     }else{
       this.ok = false;
     }
  }

  formData(data:Show){

    this.myForm.reset({
      price: data.price,
      start_time: new Date(data.start_time),
      end_time: new Date(data.end_time),
      day: new Date(data.day),
      id_room: data.id_room,
      id_movie: data.id_movie
    });
  }

}
