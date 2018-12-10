import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VictorServiceService } from '../../apiService/victor-service.service';
import { UserLeads } from '../../modal/UserLeads';
import {throwError} from 'rxjs';
@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
leadsCount: UserLeads;
todayDate;
loading=false;
  constructor(private router: Router, private leadsrv: VictorServiceService) { 
    console.log(sessionStorage.getItem('company_id'));
    this.todayDate=new Date().toLocaleDateString();
    this.loading=true;
    this.leadsrv.get_leads_count_company(localStorage.getItem('userName')).subscribe((data: UserLeads)=>{
      console.log(data);
      this.leadsCount = data;
      this.loading=false;
    },
    error => {
      console.error("Error in get company Api or token expired!");
      sessionStorage.clear();
    //  alert('Your session has been expired! Login Again');
    //  this.router.navigate(['']);
      return throwError(error);  // Angular 6/RxJS 6
     }
  );
  }

  ngOnInit() {
  }
  navigateLead(path){
    this.router.navigateByUrl(path);
  }

}
