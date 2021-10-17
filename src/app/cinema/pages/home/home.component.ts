import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { UserService } from '../../auth/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private userSvc: UserService) { }

  ngOnInit(): void {

    
  }

}
