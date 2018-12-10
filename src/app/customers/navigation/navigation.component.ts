import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VictorServiceService } from '../../apiService/victor-service.service';
import { UserLeads } from '../../modal/UserLeads';
import {throwError} from 'rxjs';
import { Company } from 'src/app/modal/company';
import { Role } from 'src/app/modal/Role';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
user_name;
leadsCount: UserLeads;
loading=false;
bsAdmin=false;
role_name;
show=false;

roles:Role[];
companies: Company[];
cid;
loginCompanyName;
showCompany;
  constructor(private router: Router, private leadscountsrv:VictorServiceService) {
    //this.loading=true;
    this.roles=[];
    this.user_name= localStorage.getItem('userName');
     this.cid= localStorage.getItem('CompanyId');
     
   
    console.log('accd',this.user_name);
    console.log(localStorage.getItem('vc_token'),localStorage.getItem('role_id'));
     //console.log()
    this.leadscountsrv.get_leads_count_company(localStorage.getItem('userName')).subscribe((data: UserLeads)=>{
      //console.log(data);
      this.leadsCount = data;
      localStorage.setItem('user', JSON.stringify(this.leadsCount));
      var user = JSON.parse(localStorage.getItem('user'));
      //console.log('local storage',user);
      this.loading=false;
    },
    error => {
      console.error("Error in get company Api or token expired!");
      sessionStorage.clear();
      return throwError(error);  // Angular 6/RxJS 6
     });

     this.leadscountsrv.getAllCompanies().subscribe((data: Company[])=>{
      this.companies = data;
     // this.loginCompanyName = sessionStorage.getItem('CompanyId');
      for(let index=0;index<this.companies.length;index++){
          if(this.companies[index].companyId==+localStorage.getItem('CompanyId')){
            this.loginCompanyName = this.companies[index].companyName;
            localStorage.setItem('loginCompany',this.loginCompanyName);
            break;
          }
      }
     
  
    },error=>{
      
      console.error('Error in get Api, Companies!');
      return throwError(error);
   });

   if(localStorage.getItem('role')==='SuperAdmin'){
     this.showCompany =true;
    }else{
     this.showCompany =false;
   }



   this.role_name = localStorage.getItem('role');

  //  this.leadscountsrv.get_uers_roles_company().subscribe((data: Role[])=>{
  //   this.roles = data;
    
  //   //console.log(this.roles);
  //   // for(let i =0;i<this.roles.length;i++){
  //   //   if(localStorage.getItem('role_id')==this.roles[i].id){
  //   //     this.role_name = this.roles[i].name;
  //   //     break;
  //   //   }
  //   }
    
  // });
  }
  ngOnInit() {
  }
   w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
 w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
dashBoard(){
  this.router.navigateByUrl('home');
}
showHide(){
  this.show=!this.show;
}
logOut(){
localStorage.clear();
  //console.log(sessionStorage.getItem('user_name'));
  this.router.navigateByUrl('');
}

}
