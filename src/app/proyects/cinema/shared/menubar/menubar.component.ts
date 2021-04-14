import { Component, OnInit } from '@angular/core';
import { Menu } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  items: Menu[] = [];

  constructor() { }

  ngOnInit(): void {
    this.MenuItems();
  }

  MenuItems(){

    this.items = [
      {
        label: 'Home',
        redirecTo: 'home'
      },
      {
        label: 'Now playing',
        redirecTo: 'now-playing'
      },
      {
        label: 'Premiers',
        redirecTo: 'premieres'
      },
      {
        label: 'Coming Soon',
        redirecTo: 'coming-soon'
      }
    ]


  }

}
