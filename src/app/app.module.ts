import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MomComponent } from './mom/mom.component';
import { MomModule } from './mom/mom.module';
import { AboutusModule } from './aboutus/aboutus.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot([
      // { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
       { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ]),
    LoginModule,
    MomModule,
    AboutusModule,
    GoogleMapsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
