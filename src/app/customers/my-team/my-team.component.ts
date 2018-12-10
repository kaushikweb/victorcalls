import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VictorServiceService } from '../../apiService/victor-service.service';
import { Salesperson } from '../../modal/salesperson';
import { Location } from '../../modal/Location';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {
  salesPerson: Salesperson[];
  longitude: number = 77.3790430;
  lt1: number = 28.6258140;
  ln1: number = 77.3790430;
  bLoc=false;
  loading=false;
  lat: number = 28.6258140;
  lon: number = 77.3790430;
  abc = [4,5,6,7];
  len;
  locations: Location[] = [];
  teamLocations: Location[];
 l1: Location;
  
  constructor(private router:Router, private locationsrv:VictorServiceService) {

    this.l1 = new Location();
    this.salesPerson = [];
    this.teamLocations = [];
    this.loading=true;
      locationsrv.getLocation(localStorage.getItem('userName')).subscribe((data:Salesperson[])=>{
            this.salesPerson = data;
            this.loading=false;
            console.log('sales location', this.salesPerson);
           
    for(let i=0;i<this.salesPerson.length;i++){
      console.log('loccc');
      this.l1 = new Location();
      this.l1.lattitude = +this.salesPerson[i].lat;
      this.l1.longitude = +this.salesPerson[i].lng;
      this.teamLocations.push(this.l1);
     
  }
  this.len = this.teamLocations.length;
       
  });
   }

  ngOnInit() {
  }

}
