import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MomRoutingModule } from './mom-routing.module';
import { MomComponent } from './mom.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { MomAddComponent } from './mom-add/mom-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MomComponent,
    MomAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    MomRoutingModule
  ]
})
export class MomModule { }
