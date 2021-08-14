import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication.service';
import { ValidationService } from 'src/app/validation.service';
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable, of } from 'rxjs';
import { catchError, finalize, take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Mom } from '../mom-interface';


@Component({
  selector: 'app-mom-add',
  templateUrl: './mom-add.component.html',
  styleUrls: ['./mom-add.component.scss']
})
export class MomAddComponent implements OnInit {
  formErrors = {'Name':'','Desc':'','File':''};
  downloadURL!: Observable<string>;
  fb1!:any;
  saveLoading: boolean=false
  callerror: string=""
adddata!: FormGroup;
  constructor(private fb: FormBuilder,
    private _validation: ValidationService,
    private authenticationService: AuthenticationService,
    private storage: AngularFireStorage,
    private firestore: AngularFirestore
    ) { }

  ngOnInit(): void {
    this.adddata = this.fb.group({
        
      Name: ['', [Validators.required,Validators.pattern(this._validation.regex.regtextnumspace)]],  
      Desc: ['', [Validators.required/*,Validators.minLength(2),Validators.maxLength(50)/*,Validators.pattern(this._validation.regex.password)*/]],  
      File: ['', [Validators.required/*,Validators.minLength(2),Validators.maxLength(50)/*,Validators.pattern(this._validation.regex.password)*/]],  
      fileSource: ['', [Validators.required]],
    },);   

  this.adddata.valueChanges.subscribe(    
      value => {    
         this.logValidationErrors()    
      }    
   );

  }

   
  logValidationErrors() {    
    this.formErrors = this._validation.getValidationErrors(this.adddata,this.getMessages());
}

onSubmit(){
  this.saveLoading=true
  let postdata: Mom={name:"",description:"",datetime:"",pdf_path:""};
  var n = Date.now();
  postdata.name=this.adddata.value["Name"]?this.adddata.value["Name"]:"",
  postdata.description=this.adddata.value["Desc"]?this.adddata.value["Desc"]:""
  postdata.datetime = n.toString()
  
    const file = this.adddata.value["fileSource"];
    const filePath = `momdetails/${n}.pdf`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`momdetails/${n}.pdf`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.pipe(take(1)).subscribe(url => {
            if (url) {
              this.fb1 = url;
              postdata.pdf_path=url
              this.createMom(postdata)
                // console.log("SAVE PDF RESPONSE : ",this.createMom(postdata))
              this.adddata.reset()
              // this.callerror="Data added successfully"
              alert("Data added successfully")
              this.saveLoading=false
            }
          });
        }),
        catchError(
          err  =>{
              console.log(err)
              alert("Failed to upload file , please try again later")
              // this.callerror="Failed to upload file , please try again later"
              this.saveLoading=false
              return of(null);
          }
        )
      )
      .subscribe(url => {
        if (url) {
          // console.log("Here : ",this.fb1);
        }
      });
}

createMom(data: Mom){
  return this.firestore.collection('meeting_details').add(data);
}

onFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if(file.name.split(".")[1] != "pdf"){
          this.formErrors.File="Only pdf files are allowed"
          this.adddata.setErrors({"invalid":true})
      }else{
        this.adddata.patchValue({
         fileSource: file
        });
      }
    }
  }

getMessages(){
    return {
      "Name":{
        "required":"Name is required",
        "pattern":"Name should not contain special characters"
      },
      "Desc":{
        "required":"Description is required",
        "pattern":"Description should not contain special characters"
      },
      "File":{
        "required":"Please upload file",
      }
    }
}
} 
