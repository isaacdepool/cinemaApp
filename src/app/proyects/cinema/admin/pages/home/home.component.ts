import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AdminService } from '../../auth/services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor( private AdminSvc: AdminService) { 

    
  }

  ngOnInit(): void {
    
    
  }

}
