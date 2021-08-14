import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Members } from './aboutus-interface';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  todo!:any
  memberdetails: Members[]=[];
  
  constructor(private httpclient: HttpClient,private store: AngularFirestore) { }

  ngOnInit(): void {
    this.todo = this.store.collection('member_details').valueChanges() as Observable<Members[]>;
    this.todo.pipe(take(1)).subscribe(
      (data: any)  =>{
        this.memberdetails=data
        // Calling the DT trigger to manually render the table
        // this.dtTrigger.next();
      }
     );

    // this.httpclient.get<Members[]>('data/aboutus.json').subscribe(
    //   data => {
    //     this.memberdetails=data
    //   }
    // )
  }

  counter(i: number) {
    return new Array(i);
  }
}
