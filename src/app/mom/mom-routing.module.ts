import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MomComponent } from './mom.component';

const routes: Routes = [
    {path:"momlist",component:MomComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MomRoutingModule { }
