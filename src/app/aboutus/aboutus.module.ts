import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AboutusComponent } from './aboutus.component';


@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    SharedModule,
    AboutusRoutingModule,
  ]
})
export class AboutusModule { }
