/// <reference types="@types/googlemaps" />
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Members } from './aboutus-interface';
// import { } from '@types/googlemaps';



@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  todo!:any
  points!: any;
  memberdetails: Members[]=[];
  latitude:number=18.5793
  longitude:number=73.8143

  @ViewChild('gmap',{ static: true }) gmapElement!:any;
  map!: google.maps.Map;
  
  constructor(private httpclient: HttpClient,private store: AngularFirestore) { }

  ngOnInit(): void {
    this.todo = this.store.collection('member_details',ref => ref.orderBy('preference',"asc")).valueChanges() as Observable<Members[]>;
    this.todo.pipe(take(1)).subscribe(
      (data: any)  =>{
        this.memberdetails=data
      }
     );
      

     this.points = this.store.collection('map_details').valueChanges() as Observable<any>;
     this.points.pipe(take(1)).subscribe(
      (data: any)  =>{
        console.log(data[0].latitude,data[0].longitude)
        if(data[0].longitutde != "" && data[0].latitude != ""){
          this.longitude=data[0].longitude
          this.latitude=data[0].latitude
        }
        // longlat = data[0].data
     console.log(this.latitude,this.longitude)
     var mapProp = {
      center: new google.maps.LatLng(this.latitude,this.longitude),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    }
    );
  }

  counter(i: number) {
    return new Array(i);
  }

  initMap(){

  }
}
