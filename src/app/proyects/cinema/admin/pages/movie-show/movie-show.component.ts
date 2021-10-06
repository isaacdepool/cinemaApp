import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from '../../../interfaces/interfaces';
import { ShowService } from '../../../services/show.service';

@Component({
  selector: 'app-movie-show',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.css']
})
export class MovieShowComponent implements OnInit {

  showData!: Show;

  constructor( private activatedRoute: ActivatedRoute,
               private showSvc: ShowService,
               private router: Router) { }

ngOnInit(): void {

  this.activatedRoute.paramMap.subscribe( resp =>{
  const id = resp.get('id') || '';

  if(Number(id) > 0){
  this.getShow( Number(id) );
  }
  });

}

getShow(id:number){

  this.showSvc.getShow(id).subscribe( resp => {
    
    if(resp.ok){
      
      this.showData = resp.movieShow;

    }else{
      this.router.navigateByUrl('/proyects/cinema/admin/movies');
    }
  });
}

}
