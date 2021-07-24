import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subject } from 'rxjs'; 
import { Person } from './mom-interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mom',
  templateUrl: './mom.component.html',
  styleUrls: ['./mom.component.scss']
})
export class MomComponent implements OnInit,OnDestroy {

  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    console.log("HERE")
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.httpClient.get<Person[]>('data/list.json')
      .subscribe(data => {
        console.log(data)
        this.persons = data;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
