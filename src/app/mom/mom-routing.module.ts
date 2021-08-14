import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { MomAddComponent } from './mom-add/mom-add.component';
import { MomComponent } from './mom.component';

const routes: Routes = [
    {path:"momlist",component:MomComponent,canActivate:[AuthGuard]},
    {path:"momadd",component:MomAddComponent,canActivate:[AuthGuard]}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MomRoutingModule { }
