import { Component, OnInit,Input } from '@angular/core';
import { Members } from 'src/app/aboutus/aboutus-interface';

@Component({
  selector: 'app-memberdetails',
  templateUrl: './memberdetails.component.html',
  styleUrls: ['./memberdetails.component.scss']
})
export class MemberdetailsComponent implements OnInit {
  
  @Input()data: Members={name:"",designation:"",contactno:0};
  constructor() { }

  ngOnInit(): void {
  }

}
