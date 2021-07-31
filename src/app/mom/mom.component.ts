import { Component, OnInit,OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs'; 
import { Mom, Person } from './mom-interface';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { data } from 'jquery';

@Component({
  selector: 'app-mom',
  templateUrl: './mom.component.html',
  styleUrls: ['./mom.component.scss']
})

export class MomComponent implements OnInit,OnDestroy {

  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  mom: Mom[]=[]
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private httpClient: HttpClient,private store: AngularFirestore) { }


  ngOnInit(): void {
    let todo: Observable<Mom[]>;   
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    // todo = this.store.collection('meeting_details').valueChanges({ idField: 'id' }) as unknown  as Observable<Mom[]>;
    todo = this.store.collection('meeting_details').valueChanges() as Observable<Mom[]>;
    
    todo.subscribe(
      data  =>{
        console.log(data)
        this.mom = data
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      }
     );
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  
  openPdf(url:string){
    window.open(url,'_blank')
  }
}
