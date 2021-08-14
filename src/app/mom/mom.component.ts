import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs'; 
import { Mom, Person, User } from './mom-interface';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { data } from 'jquery';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-mom',
  templateUrl: './mom.component.html',
  styleUrls: ['./mom.component.scss']
})

export class MomComponent implements OnInit,OnDestroy {
  showAddBtn: boolean=false
  todo!: Observable<Mom[]>;   
  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  mom: Mom[]=[]
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private httpClient: HttpClient,private store: AngularFirestore) { }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
      
    };
    // todo = this.store.collection('meeting_details').valueChanges({ idField: 'id' }) as unknown  as Observable<Mom[]>;
    this.todo = this.store.collection('meeting_details').valueChanges() as Observable<Mom[]>;
    
    this.todo.pipe(take(1)).subscribe(
      data  =>{
        this.mom = data
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      }
     );
     let userdata = localStorage.getItem('user')
     const user: User = JSON.parse(userdata?userdata:"");
     if(user.email === "admin@saipalace.com"){
       this.showAddBtn=true
     }
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  
  openPdf(url:string){
    window.open(url,'_blank')
  }
}
