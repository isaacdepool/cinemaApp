import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() title: string = '';
  buttonTitle: string = 'Buy Tickets';
  constructor() { 
  }

  ngOnInit(): void {

    if(this.title === 'coming soon'){
      this.buttonTitle = 'See more...'
    }
  }

}
