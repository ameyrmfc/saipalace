import { Component } from '@angular/core';
// import { observable } from 'rxjs';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // isLoggedin = false
  isLoggedIn: Observable<boolean>;
  constructor(private ngAuthService: AuthenticationService){
    this.isLoggedIn = this.ngAuthService.isLoggedInApp
  }
  title = 'saipalace';

  signout(){
    this.ngAuthService.SignOut()
  }
}
