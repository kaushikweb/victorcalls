import { Component, OnInit } from '@angular/core';
import { Company } from '../../modal/company';
import { Router } from '@angular/router';
import { VictorServiceService } from '../../apiService/victor-service.service';
import {throwError} from 'rxjs';
@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
  company : Company;
  constructor(private router:Router, private updatecompanysrv:VictorServiceService) {
    this.company = new Company();
    this.company = JSON.parse(localStorage.getItem('update_company'));
   }

  ngOnInit() {
  }
  cancelCompany(){
    console.log(' Cancel company');
    this.router.navigateByUrl('home/cmp');
  }
  updateCompany(){
    console.log('updated company');
    console.log(this.company);
   this.updatecompanysrv.update_company_id(this.company).subscribe((res:any)=>{
     console.log(res);
     alert('Company Upadated Successfully !');
    this.router.navigateByUrl('home/cmp');
   },error=>{
    console.error("Error in get company Api or token expired!");
       sessionStorage.clear();
      alert('Error in Put Api, Upadte Company');
      //this.router.navigate(['']);
      //this.loading=false;
       return throwError(error);  // Angular 6/RxJS 6
   });
  }

}
