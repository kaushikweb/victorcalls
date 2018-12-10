import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VictorServiceService } from 'src/app/apiService/victor-service.service';
import { MyItems } from '../../modal/myItems';
import {throwError} from 'rxjs';
import { UserLeads } from '../../modal/UserLeads';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Project } from '../../modal/project';
import { Registration } from '../../modal/Registration';
import { MyLead } from 'src/app/modal/MyLead';
@Component({
  selector: 'app-visitdone',
  templateUrl: './visitdone.component.html',
  styleUrls: ['./visitdone.component.css']
})
export class VisitdoneComponent implements OnInit {

  modalRef: BsModalRef;
  loading = false;
  newItem: MyItems;
  indicesOfSelectedLeads = [];
  selectedProjectName;
  selectedProjectId;
  public uniqueNameList: any;
  public projectNameList: string[];
  public projects: Project[];
  public myLead: MyLead[];
  public selectedLead: MyLead[];
  public numberOfSelectedLead = 0;
  leadItems: MyItems[];
  newlist: string[];
  dropdownSettings = {};
   dropdownList = [];
   selectedUserList = [];
   dropdownListAU = [];
   multiSelectDropdownSelectedIds = [];
    multiSelectDropdownSelectedTokens = [];
   userList = [];
   leadDetails:MyLead;
   dropdownSettingsA = {};
   dropdownListA = [];
   selectedUserListA = [];
   status='10';
   isUsers= false;
   pageNumber=1;
   cid;
   users: Registration[];
   chekedLead=false;
   leadsCount: UserLeads;
   
   isRowSelect= false;
    isUserSelect = false;
    isAssignSelect = false;
    isButton = false;
  constructor(private router:Router,private visitdonesrv:VictorServiceService) {

    this.newlist = [];
    this.projectNameList = ['Select A project'];
     this.uniqueNameList =[];
    this.myLead=[];
    this.selectedLead = [];
    this.cid = localStorage.getItem('comapany_id');
    this.loading= true;
    this.visitdonesrv.getOtherLeads(
     localStorage.getItem('user_name'),this.status).subscribe((data: MyLead[]) => {
     this.myLead = data;
     this.loading=false;
      console.log(this.myLead);
     
     // this.myLead1 = this.myLead.slice(0,5);
     return true;
     },error => {
         console.error("Error in Api!");
         return throwError(error);  // Angular 6/RxJS 6
     });

     this.visitdonesrv.get_leads_count_company(localStorage.getItem('user_name')).subscribe((data: UserLeads)=>{
       console.log(data);
       this.leadsCount = data;
       this.loading=false;
     },
     error => {
       console.error("Error in get company Api or token expired!");
       sessionStorage.clear();
       return throwError(error);  // Angular 6/RxJS 6
      });

   }

  ngOnInit() {
  }

}
