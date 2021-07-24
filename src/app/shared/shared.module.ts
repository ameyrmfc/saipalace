import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberdetailsComponent } from './memberdetails/memberdetails.component';



@NgModule({
  declarations: [
    MemberdetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MemberdetailsComponent
  ]
})
export class SharedModule { }
