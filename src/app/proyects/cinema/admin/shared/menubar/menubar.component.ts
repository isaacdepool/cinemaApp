import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AdminService } from '../../auth/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  items: MenuItem[];

  constructor( private AdminSvc: AdminService,
               private router: Router) { 

    this.items = [
      {
        label: 'Movies',
        icon: 'pi pi-video',
        items: [
        {
          label: 'Add Movie',
          icon: 'pi pi-plus',
          routerLink: './add-movie'
        },
        {
          label: 'View Movies',
          icon: 'pi pi-list',
          routerLink: './movies'
        },
        {
          label: 'Shows',
          icon: 'pi pi-ticket',
          items: [
            {
              label: 'Add Show',
              icon: 'pi pi-plus',
              routerLink: './add-shows'
            },
            {
              label: 'View Shows',
              icon: 'pi pi-list',
              routerLink: './shows'
            },
          ]
        },
      ] 
      },
      {
        label: 'Rooms',
        icon: 'pi pi-th-large',
        items: [ 
        {
          label: 'Add Room',
          icon: 'pi pi-plus',
          routerLink: './add-room'
        },
        {
          label: 'View Rooms',
          icon: 'pi pi-list',
          routerLink: './rooms'
        },
      ] 
      },
      {
          label: 'Purchases',
          icon: 'pi pi-money-bill',
          routerLink: './purchases'
      },
      {
        label: 'Users',
        icon: 'pi pi-user',
        routerLink: './users'
      },
      {
        label: 'Admins',
        icon: 'pi pi-user',
        routerLink: ''
      },
    ]
  }

  ngOnInit(): void {
  }

  logout(){

    localStorage.removeItem('tokenAdmin');

    this.router.navigateByUrl('/proyects/cinema/admin/auth');
  }

}
