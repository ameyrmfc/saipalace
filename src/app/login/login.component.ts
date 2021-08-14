import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidationService } from '../validation.service';
import { catchError } from 'rxjs/operators';
import { Observable, of, Subscription } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

formErrors = {'Email':'','Password':''};
loginForm!: FormGroup;
login!: Observable<any>

message!: string
flag: string = "true"
saveLoading: boolean=false
  constructor(private fb: FormBuilder,
    private _validation: ValidationService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.message = ""
    this.loginForm = this.fb.group({
        
      Email: ['', [Validators.required,Validators.pattern(this._validation.regex.regemail)]],  
      Password: ['', [Validators.required/*,Validators.minLength(2),Validators.maxLength(50)/*,Validators.pattern(this._validation.regex.password)*/]],  
    },);   

  this.loginForm.valueChanges.subscribe(    
      value => {    
         this.logValidationErrors()    
      }    
   );

   this.route.queryParams.subscribe(params => {
        this.message = params.msg;
        this.flag = params.flag
      }
    );

  }
  
  logValidationErrors() {    
    this.formErrors = this._validation.getValidationErrors(this.loginForm);    
}

onSubmit() {
  this.saveLoading=true
  
  let email = this.loginForm.value["Email"]
  let pass = this.loginForm.value["Password"]
  this.authenticationService.SignIn(email, pass)
 email = '';
 pass = '';
 this.saveLoading=false
  // this.saveLoading=true
  //this.saveLoading=false
}
}
