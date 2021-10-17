import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { FooterComponent } from './footer/footer.component';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';
import { HourPipe } from './menubar/pipes/hour.pipe';



@NgModule({
  declarations: [
    MenubarComponent, 
    FooterComponent,
    HourPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports:[
    MenubarComponent,
    FooterComponent,
    HourPipe
  ],
  providers: [HourPipe] 
})
export class SharedModule { }
