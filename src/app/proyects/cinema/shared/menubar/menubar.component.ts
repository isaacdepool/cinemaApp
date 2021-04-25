import { Component, OnInit } from '@angular/core';
import { Menu } from '../../interfaces/interfaces';
import { UserService } from '../../auth/services/user.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  items: Menu[] = [];
  isActiveUser: boolean = false;

  popover: any = document.querySelector('#popover');
  tooltip: any = document.querySelector('#tooltip');
  
  constructor( private userSvc: UserService ) { }

  ngOnInit(): void {
    this.MenuItems();

    this.userSvc.validateToken().subscribe( resp =>{
      this.isActiveUser = resp;
    });

     
    
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

  logout(){
    this.userSvc.logout();

    this.userSvc.validateToken().subscribe( resp =>{
      this.isActiveUser = resp;      
    });
  }

}
