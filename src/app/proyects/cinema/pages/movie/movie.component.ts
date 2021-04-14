import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  isCalendar: boolean = true;
  iconHour: string = 'pi pi-circle-off';

  constructor() { }

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
