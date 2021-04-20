import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { FooterComponent } from './footer/footer.component';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    MenubarComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports:[
    MenubarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
