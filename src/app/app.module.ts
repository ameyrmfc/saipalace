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
import { ViewPdfComponent } from './shared/view-pdf/view-pdf.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // LoginComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot([
      // { path: 'login', component: LoginComponent },
      { path: 'viewpdf', component: ViewPdfComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
       { path: '**', redirectTo: 'login', pathMatch: 'full' }
    ]),
    LoginModule,
    MomModule,
    AboutusModule,
    GoogleMapsModule,
    HomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
