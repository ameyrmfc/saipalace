import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MomRoutingModule } from './mom-routing.module';
import { MomComponent } from './mom.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MomComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DataTablesModule,
    MomRoutingModule
  ]
})
export class MomModule { }
