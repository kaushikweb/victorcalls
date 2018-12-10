import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { VictorServiceService } from '../../apiService/victor-service.service';
import { MyItems } from '../../modal/myItems';
import { MyLead } from '../../modal/MyLead';
import { Project } from '../../modal/project';
import { Registration } from '../../modal/Registration';
import { Nameid } from '../../modal/nameid';
import {throwError} from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

import {HttpResponse } from '@angular/common/http';
import { UserLeads } from '../../modal/UserLeads';
import { Company } from 'src/app/modal/company';
@Component({
  selector: 'app-raw-leads',
  templateUrl: './raw-leads.component.html',
  styleUrls: ['./raw-leads.component.css']
})
export class RawLeadsComponent implements OnInit {
  modalRef: BsModalRef;
  blist;
  loading = false;
  
  remarks;
  numberOfRecords;
  x:string[] = [];
  expand=[true,true,true,true,true,true,true,true,true,true];
  collapse=[false,false,false,false,false,false,false,false,false,false];
  expandN=[true,true,true,true,true,true,true,true,true,true];
  collapseN=[false,false,false,false,false,false,false,false,false,false];
  name;
  xN:string[]=[];
  chekedLead=false;
  selectedUsers;
  userNameId: Nameid[];
  spliceIndexS;
  spliceIndexE;
  token;
  public projectNameList: string[];
  public uniqueNameList: any;
  selectedProjectId;
  bExcel = false;
  public myLead: MyLead[];
  pageNumber;
  users: Registration[];
  isUsers= false;
  alertMsg= 'Please enter valid page number! 0 To  ';
  rawLeadsCount = +localStorage.getItem('rawLeadsCount');
  //abcd = 3.6;
  //abcde = Math.floor(this.abcd);
      numberOfPage = Math.ceil(this.rawLeadsCount/10);
      public myLead1: MyLead[];
      public selectedLead: MyLead[];
      public projects: Project[];
      dropdownSettings = {};
      dropdownList = [];
      selectedUserList = [];
      userList = [];
      blankUserList: string[];
      projectList = ['99acre','housing.com','ASC','DLF'];
      dropdownSettingsA = {};
      dropdownListA = [];
      dropdownListAU = [];
      multiSelectDropdownSelectedIds = [];
      multiSelectDropdownSelectedTokens = [];
      selectedUserListA = [];
      selectedProjectName;
      indexL;
      selectedCompanyName;
      selectedCompanyId;
      indexLI;
      indexRawLeads;
      leadItems: MyItems[];
      leadDetails:MyLead;
      filter = false;
      isRowSelect= false;
      isUserSelect = false;
      isAssignSelect = false;
      isButton = false;
      companies: Company[];
      msg = false;
      msg2 = false;
      bCmpApi=false;
      public numberOfSelectedLead = 0;
      key;
      indicesOfSelectedLeads = [];
      leadsCount : UserLeads;
  
  constructor(private router:Router,private rawLeadService:VictorServiceService,
      private bsmodalservice: BsModalService) { 
        var user = JSON.parse(localStorage.getItem('user'));
      //  this.numberOfPage = user.rawLeadsCount
      if(localStorage.getItem('userName')===null){
        console.log('sesson strorage', localStorage.getItem('userName'));
        this.router.navigate(['']);
      }
      this.selectedCompanyId=localStorage.getItem('CompanyId');
    //this.myLead = new MyLead[10];
    this.projectNameList = ['Select A project'];
    this.uniqueNameList =[];
    this.userNameId= [];
     this.users = [];
    if(sessionStorage.getItem('role')==='SuperAdmin'){
    this.loading=true;
    this.rawLeadService.getAllCompanies().subscribe((data: Company[])=>{
    this.companies = data;
    this.loading=false;
    this.selectedCompanyId=this.companies[0].companyId;
    console.log('CompanyList',this.companies,this.companies.length);

},error=>{
  this.loading=false;
  console.error('Error in get Api, Companies!');
  return throwError(error);
});

this.rawLeadService.get_leads_count_company(localStorage.getItem('userName')).subscribe((data:UserLeads)=>{
this.leadsCount = data;
console.log('leadStatus',this.leadsCount);
});

}
this.pageNumber=1;

       
      this.selectedLead = [];
      this.myLead1 = [];
      this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
     }
  
     this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
           // trick the Router into believing it's last link wasn't previously loaded
           this.router.navigated = false;
           // if you need to scroll back to top, here is the right place
           window.scrollTo(0, 0);
        }
    });
                          
      
  }

  ngOnInit() {
    if(localStorage.getItem('userName')===null){
      console.log('sesson strorage', localStorage.getItem('userName'));
      this.router.navigate(['']);
    }
    let index=0;
 //   this.selectedCompanyId=this.companies[index].companyId;
   // this.selectedCompanyName=this.companies[index].companyName;
    this.pageNumber=1;
    this.loading=true;
    this.rawLeadService.g_rawLeads_with_paging(localStorage.getItem('CompanyId'),this.pageNumber).subscribe((data: MyLead[]) => {
      this.indexL = data.length;
       this.myLead = data;
      console.log('leads',this.myLead);
      this.loading=false;
    // for(let i =0;i<this.myLead.length;i++){
    //  this.x[i] = this.myLead[i].cmpctLabel.substring(0,20);
    // }//cmpctLabel.substring
    // for(let i =0;i<this.myLead.length;i++){
    //  this.xN[i] = this.myLead[i].name.substring(0,20);
    // }//cmpctLabel.substring
    return true;
       },error => {
         this.loading=false;
         console.error("Error in Api!");
         return throwError(error);  // Angular 6/RxJS 6
      });
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
  
      this.pageNumber = 1;
      this.loading=true;

    
  }

  getRawLeadsOfSelectedCmp(){
    for(let index=0;index<this.companies.length;index++){
      if(this.selectedCompanyName===this.companies[index].companyName){

        console.log(this.selectedCompanyName);
        this.loading=true;
        this.rawLeadService.g_rawLeads_with_paging(this.companies[index].companyId,this.pageNumber).subscribe((data: MyLead[]) => {
          this.indexL = data.length;
           this.myLead = data;
          this.loading=false;
        console.log('leadssss',this.myLead,data.length);
          
        for(let i =0;i<this.myLead.length;i++){
         this.x[i] = this.myLead[i].cmpctLabel.substring(0,20);
        }//cmpctLabel.substring
        for(let i =0;i<this.myLead.length;i++){
         this.xN[i] = this.myLead[i].name.substring(0,20);
        }//cmpctLabel.substring
        return true;
        
           },error => {
             this.loading=false;
             console.error("Error in Api!");
             return throwError(error);  // Angular 6/RxJS 6
          });
      }
    }
  }
  getDatabyPageNumber(){
    console.log('page number');
              if(this.pageNumber>0){
                this.loading=true;
                this.rawLeadService.g_rawLeads_with_paging(localStorage.getItem('CompanyId'),this.pageNumber).subscribe((data: MyLead[]) => {
                  this.indexL = data.length;
                   this.myLead = data;
                   this.loading=false;
                  
                // for(let i =0;i<this.myLead.length;i++){
                //  this.x[i] = this.myLead[i].cmpctLabel.substring(0,20);
                // }//cmpctLabel.substring
                // for(let i =0;i<this.myLead.length;i++){
                //  this.xN[i] = this.myLead[i].name.substring(0,20);
                // }//cmpctLabel.substring
               return true;
   
                   },
                   error => {
                     this.loading=false;
                             console.error("Error in Api!");
                             return throwError(error);  // Angular 6/RxJS 6
                            }
                   ); 
              }else{
                this.alertMsg = this.alertMsg + String(this.numberOfPage);
              alert(this.alertMsg);
              this.alertMsg = 'Please enter valid page number! 0 To  ';
              }    
  }// end of getDatabyPagenumber
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
   
  openModelWindow(template:TemplateRef<any>){
    this.modalRef = this.bsmodalservice.show(template);
    for(let j = 0; j<this.indicesOfSelectedLeads.length; j++){
      this.myLead[this.indicesOfSelectedLeads[j]].assignedToUsers = this.selectedUserListA[0];
      this.selectedLead.push(this.myLead[this.indicesOfSelectedLeads[j]]);
    
       }
      this.rawLeadService.getAllProjectsA(localStorage.getItem('userName')).subscribe((res:Project[])=>{
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
  onItemSelectA(item: any) {
          //selected users
          console.log('selected users', this.selectedUserListA)     
          if(this.selectedUserListA.length!=0){
            this.isUserSelect = true;
        }else{this.isUserSelect = false;}               
  } // end of onItemSelect
  selectProject(){
        
   
            for(let i =0;i<this.projects.length;i++){
                if(this.selectedProjectName === this.projects[i].projectName){
                  this.selectedProjectId = this.projects[i].projectId;
                  console.log('index:',this.selectedProjectId);
                  //calling user api by projectid
                  this.rawLeadService.gUserByProjectId(this.selectedProjectId).subscribe((res:Registration[])=>{
                      this.users = res;
                      console.log('selected project users:',this.users);
                        if(this.users!=null){
                        let len = this.users.length;
                 
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
    console.log('assign leads');
              for(let i =0;i<this.selectedLead.length;i++){   
                      for(let j =0;j<this.selectedUserListA.length;j++){  
                          let index1 = this.dropdownListAU.indexOf(this.selectedUserListA[j]);
                         console.log('selected user',this.multiSelectDropdownSelectedIds[index1]);
                         this.selectedLead[i].items[j] = new MyItems(); 
                         this.selectedLead[i].items[j].assignedTo =this.multiSelectDropdownSelectedIds[index1];
                         this.selectedLead[i].items[j].token =this.multiSelectDropdownSelectedTokens[index1];
                         console.log('s user name:',this.selectedUserListA[j]);
                         console.log('s user id:',this.multiSelectDropdownSelectedIds[index1]);
                         console.log('s user token:',this.multiSelectDropdownSelectedTokens[index1]);
                         this.selectedLead[i].items[j].token = this.multiSelectDropdownSelectedTokens[index1];
                         this.selectedLead[i].items[j].leadID = this.selectedLead[i].leadId;
                         this.selectedLead[i].items[j].statusId =1;
                         this.selectedLead[i].items[j].status = 1;
                         this.selectedLead[i].status = 1;
                         this.selectedLead[i].items[j].companyId = this.selectedProjectId;
                         this.spliceIndexS = j+1;
                         break;
                        }
                       
                        this.spliceIndexE = this.selectedLead[i].items.length - this.spliceIndexS;
                        this.selectedLead[i].items.splice(this.spliceIndexS,this.spliceIndexE);
                  }
                  for(let i=0;i<this.selectedLead.length;i++){
                    this.loading=true;
                    this.rawLeadService.updateLeads(this.selectedLead[i],this.selectedLead[i].leadId).subscribe((res: HttpResponse<Text>)=> {
               
                console.log('assign',res);
                this.loading=false;
                alert('leads assigned successfully');
                });  
               }
         
    }
  


cancelAssignment(){
  this.modalRef.hide();
  //this.router.navigateByUrl('home/raw');
}// end of cancel
getDetails(myList:MyLead){
 this.leadDetails=myList;
}//end of getDetails

createExcel():void {
  this.rawLeadService.exportAsExcelFile(this.myLead, 'rawLead');
}//end of create excel
}
