import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNg 
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { SharedModule } from 'primeng/api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    SharedModule
  ]
})
export class PrimeNgModule { }
