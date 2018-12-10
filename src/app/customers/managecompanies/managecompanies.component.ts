import { Component, OnInit } from '@angular/core';
import { VictorServiceService } from '../../apiService/victor-service.service';
import { Router } from '@angular/router';
import { Company } from '../../modal/company';
import {throwError} from 'rxjs';
@Component({
  selector: 'app-managecompanies',
  templateUrl: './managecompanies.component.html',
  styleUrls: ['./managecompanies.component.css']
})
export class ManagecompaniesComponent implements OnInit {
  companies: Company[];
  dCompany: Company;
  sCompany : Company;
  loading=false;
  constructor(private cmpsrv: VictorServiceService, private router: Router) {
    this.companies = [];
    this.loading=true;
    this.cmpsrv.getAllCompanies().subscribe((data: Company[])=>{
       console.log(data);
       this.companies = data;
       this.loading=false;
     },
     error => {
       console.error("Error in get company Api or token expired!");
       //sessionStorage.clear();
      //alert('Your session has been expired! Login Again');
      //this.router.navigate(['']);
      this.loading=false;
       return throwError(error);  // Angular 6/RxJS 6
      });
   }

  ngOnInit() {
  }
  createCompany(){
    this.router.navigate(['home/createcompany']);
  }
  delete(myList){}

  updateCompany(index){
    localStorage.setItem('update_company', JSON.stringify(this.companies[index]));
    this.router.navigateByUrl('home/update-company');
  }
  integration(companyId){}
}
