import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberdetailsComponent } from './memberdetails/memberdetails.component';
import { ViewPdfComponent } from './view-pdf/view-pdf.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';



@NgModule({
  declarations: [
    MemberdetailsComponent,
    ViewPdfComponent
  ],
  imports: [
    CommonModule, PdfViewerModule
  ],
  exports:[
    MemberdetailsComponent
  ]
})
export class SharedModule { }
