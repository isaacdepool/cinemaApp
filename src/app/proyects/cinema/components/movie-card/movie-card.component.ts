import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../../interfaces/interfaces';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit{

  @Input() title: string = '';
  @Input() movies: Movie[] = [];
  
  buttonTitle: string = 'Buy Tickets';

  constructor( private router: Router) {     
  }

  ngOnInit(): void {

    if(this.title === 'coming soon'){
      this.buttonTitle = 'See more...'
    }
  }

  redirecTo( movie: Movie ){
    
    this.router.navigate(['proyects/cinema/movie', movie.name]);
  }
}
