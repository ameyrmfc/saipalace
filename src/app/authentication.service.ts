import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // userData: Observable<firebase.User>;
  private loggedInApp: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private angularFireAuth: AngularFireAuth,
    private route:Router
    ) {
    // this.userData = angularFireAuth.authState;
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are Successfully signed up!', res);
        if (res) {
          localStorage.setItem('user', JSON.stringify(res.user));
        }
      })
      .catch(error => {
        localStorage.setItem('user', "null");
        console.log('Something is wrong:', error.message);
      });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        // console.log("You're in!", res);
        if (res) {
          localStorage.setItem('user', JSON.stringify(res.user));
          this.route.navigate(['/momlist'])
          this.loggedInApp.next(true);

          
        }else{
          localStorage.setItem('user', "");
          this.route.navigate(['/login'],{queryParams:{"msg":"Please enter Valid Email/Password","flag":false}});
        }
        return true
      })
      .catch((err: any) => {
        localStorage.setItem('user', "");
        console.log("Something went wrong:", err.message,err);
        this.route.navigate(['/login'],{queryParams:{"msg":err.message,"flag":false}});
      });
      return false
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .signOut();
      let msg = localStorage.getItem("user")?"Loggout SuccessFully":""
      localStorage.removeItem("user");
      this.loggedInApp.next(false);
      this.route.navigate(["/login"],{queryParams:{"msg":msg,"flag":true}})
  } 

  get isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    return (user !== null ) ? true : false;
  }


  get isLoggedInApp() {
    return this.loggedInApp.asObservable();
  }
}