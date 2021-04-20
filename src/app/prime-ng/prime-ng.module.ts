import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNg 
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import { SharedModule } from 'primeng/api';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    SharedModule
  ]
})
export class PrimeNgModule { }
