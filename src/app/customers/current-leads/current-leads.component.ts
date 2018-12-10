import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { VictorServiceService } from '../../apiService/victor-service.service';
import { MyLead } from '../../modal/MyLead';
import { MyItems } from '../../modal/myItems';
import {throwError} from 'rxjs';
import { UserLeads } from '../../modal/UserLeads';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Project } from '../../modal/project';
import { Registration } from '../../modal/Registration';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-current-leads',
  templateUrl: './current-leads.component.html',
  styleUrls: ['./current-leads.component.css']
})
export class CurrentLeadsComponent implements OnInit {
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
   
   statusId='1';
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
  constructor(private router:Router,private currentleadsrv:VictorServiceService,
    private bsmodalservice: BsModalService) {
     this.newlist = [];
     this.projectNameList = ['Select A project'];
      this.uniqueNameList =[];
     this.myLead=[];
     this.selectedLead = [];
     this.cid = localStorage.getItem('CompanyId');  
     this.loading=true;
     this.currentleadsrv.getCmpLeadsByStatus(this.cid,this.statusId).subscribe((data: MyLead[]) => {
      this.myLead = data;
      this.loading=false;
       console.log(this.myLead);
      
      // this.myLead1 = this.myLead.slice(0,5);
      return true;
      },error => {
          console.error("Error in Api!");
          return throwError(error);  // Angular 6/RxJS 6
      }); 
     
      this.currentleadsrv.get_leads_count_company(localStorage.getItem('userName')).subscribe((data: UserLeads)=>{
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
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.dropdownSettingsA = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };


     
  }

  openModelWindow(template:TemplateRef<any>){
    this.modalRef = this.bsmodalservice.show(template);
    for(let j = 0; j<this.indicesOfSelectedLeads.length; j++){
      this.myLead[this.indicesOfSelectedLeads[j]].assignedToUsers = this.selectedUserListA[0];
      this.selectedLead.push(this.myLead[this.indicesOfSelectedLeads[j]]);
    //  this.selectedLead.push(this.myLead[this.indicesOfSelectedLeads[j]]);
       }
      this.currentleadsrv.get_projects_of_company(localStorage.getItem('userName')).subscribe((res:Project[])=>{
         // console.log(res);
          this.projects = res;
          console.log('project list',this.projects);
          for(let i=0;i<this.projects.length;i++){
            this.projectNameList.push(this.projects[i].projectName);
          }
      
        this.uniqueNameList = new Set(this.projectNameList);
         console.log('unique',this.uniqueNameList);
          
      });

  }

  onRowSelect(event: any, i) {
    if(event== true){
    this.numberOfSelectedLead = this.numberOfSelectedLead +1;
    this.indicesOfSelectedLeads.push(i);
  
  }else{
    
      let index = this.indicesOfSelectedLeads.indexOf(i); // returns 0
      this.indicesOfSelectedLeads.splice(index, 1);
      //The first parameter is the index at which we want to remove,
      // and the second is the number of elements to remove, starting from that index.
  
    this.numberOfSelectedLead = this.numberOfSelectedLead -1;
  
  }
  if(this.numberOfSelectedLead==0){
    this.chekedLead = false;
  }else{ this.chekedLead=true;}
  
    }

    selectProject(){
        for(let i =0;i<this.projects.length;i++){
                  if(this.selectedProjectName === this.projects[i].projectName){
                    this.selectedProjectId = this.projects[i].projectId;
                    console.log('index:',this.selectedProjectId);
                    //calling user api by projectid
                    this.currentleadsrv.gUserByProjectId(this.selectedProjectId).subscribe((res:Registration[])=>{
                        this.users = res;
                        console.log('selected project users:',this.users);
                    if(this.users!=null){
                    let len = this.users.length;
                         // this.userNameId.length = len; 
                    //     this.userNameId = new Array(len);
                          for(let i =0;i<this.users.length;i++){
                            let name = this.users[i].firstName+' '+this.users[i].lastName;
                            let id = this.users[i].id;
                            let token = this.users[i].token;
                            this.dropdownListAU.push(name);
                            this.multiSelectDropdownSelectedIds.push(id);
                            this.multiSelectDropdownSelectedTokens.push(token);
  
                          }
                        this.isUsers = true;
                         return;
                        }else{
                          this.isUsers = false;
                        }
  
                    });
                   break;
                  }
              }
        }//end of selected project

        assignLeads(){
          for(let i =0;i<this.selectedLead.length;i++)
          {   // updating number os selected leads
            console.log('selected user',this.multiSelectDropdownSelectedIds);  
            for(let j =0;j<this.selectedUserListA.length;j++)
                {  
                  let index1 = this.dropdownListAU.indexOf(this.selectedUserListA[j]);
                 // this.selectedLead[i].items = [];
                 this.newItem = new MyItems();
                 this.newItem.assignedTo = String(this.multiSelectDropdownSelectedIds[index1]);
                this.newItem.token= this.multiSelectDropdownSelectedTokens[index1];
                console.log('assignto',this.multiSelectDropdownSelectedIds[index1]);
                // this.selectedLead[i].items[j].token =this.multiSelectDropdownSelectedTokens[index1];
                 console.log('s user name:',this.selectedUserListA[j]);
                 console.log('s user id:',this.multiSelectDropdownSelectedIds[index1]);
                 console.log('s user token:',this.multiSelectDropdownSelectedTokens[index1]);
                this.newItem.leadID = this.selectedLead[i].leadId;
                
                 this.newItem.status = 1;
                 this.newItem.companyId = +localStorage.getItem('CompanyId');
                 this.newItem.compactLabel ='remarks';
                 this.newItem.isAssigned = false;
                 this.newItem.projectName = 'asd';
                 this.newItem.queryRemarks = 'query';
                 this.newItem.rangeFrom = 10;
                 this.newItem.rangeTo=11;
                 this.newItem.recivedOn = null;
                 this.newItem.builderInterest ="1";
                 this.newItem.statusId=1;
                 this.newItem.userName='ffgdfg';
                 this.newItem.typeOfProperty=1;
                 this.selectedLead[i].isAssigned = '1';
                 this.selectedLead[i].status = 1
                 this.selectedLead[i].items.push(this.newItem);       
                                
                }
                
          }
         
      for(let i=0;i<this.selectedLead.length;i++){
           this.loading=true;
           console.log('updated leads',this.selectedLead[i]);
           this.currentleadsrv.updateLeads(this.selectedLead[i],this.selectedLead[i].leadId).subscribe((res: HttpResponse<Text>)=> {
       
       this.loading=false;
       alert('leads assigned successfully');
       });

        }
        this.router.navigateByUrl('home/current');
      }

      cancelAssignment(){
        this.modalRef.hide();
       // this.router.navigateByUrl('home/current');
      }

      
      onItemSelectA(item: any) {
        //selected users
        console.log('selected users', this.selectedUserListA)     
        if(this.selectedUserListA.length!=0){
          this.isUserSelect = true;
      }else{this.isUserSelect = false;}               
} // end of onItemSelect
}
