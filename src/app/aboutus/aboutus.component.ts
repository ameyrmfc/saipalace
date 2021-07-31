import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Members } from './aboutus-interface';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  
  memberdetails: Members[]=[];
  
  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.httpclient.get<Members[]>('data/aboutus.json').subscribe(
      data => {
        this.memberdetails=data
      }
    )
  }

  counter(i: number) {
    return new Array(i);
  }
}
