import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MomComponent } from './mom/mom.component';
import { MomModule } from './mom/mom.module';
import { AboutusModule } from './aboutus/aboutus.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot([
      { path: 'welcome', component: MomComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
       { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    MomModule,
    AboutusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
