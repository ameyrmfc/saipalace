import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AboutusComponent } from './aboutus.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    AboutusRoutingModule,
  ]
})
export class AboutusModule { }
