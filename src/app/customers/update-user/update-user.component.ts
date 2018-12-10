import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VictorServiceService } from '../../apiService/victor-service.service';
import { Registration } from '../../modal/Registration';
import { Project } from '../../modal/project';
import {throwError} from 'rxjs';
import { Role } from '../../modal/Role';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: Registration;
  users: Registration[];
  cpy=false;
  updateIndex;
  selectedRole;
  selectedProject;
  companyIds =[1,2,3,4,5];
  updatedUser: Registration;
  cpn=false;
  
  roles: Role[];
  projects:Project[];
  projectList:Project[];
  constructor(private router:Router,private updateusersrv:VictorServiceService) {
    this.updatedUser = new Registration();
this.updatedUser = JSON.parse(localStorage.getItem('update_user'));
console.log('update usern local storage',this.updatedUser);
      this.user =new Registration();
      this.users = [];
      this.roles = [];
      this.projects =[];

      this.updateusersrv.get_projects_of_company(localStorage.getItem('userName')).subscribe((data:Project[])=>{
        this.projects = data;
        console.log('Get all projects',this.projects);
      });
      this.updateusersrv.get_uers_roles_company().subscribe((data:Role[])=>{
        this.roles = data;
        console.log('Get all roles',this.roles);
      });

   }

  ngOnInit() {
  }

  confirmPassword(event: any){
    //console.log('cp',event.target.value);
   // console.log('p',this.user.password);
    if(this.updatedUser.password === event.target.value){
       this.cpy = true;
       this.cpn = false;
    }else{
     this.cpy = false;
     this.cpn = true;
    }
     //this.user.password = event.target.value;
    // console.log('password', this.user.password);
 }
  selectRole(){
    for(let i =0;i<this.roles.length;i++){
      if(this.selectedRole==this.roles[i].name){
        this.updatedUser.roleId = this.roles[i].roleID;
        break;
      }
    }
    // console.log(this.user.role.name);
    }
  selectProject(){
   for(let i =0;i<this.projects.length;i++){
     if(this.selectedProject==this.projects[i].projectName){
       this.updatedUser.projectId = this.projects[i].projectId;
       break;
     }
   }
     
  }
  updateUser(){
    //this.user.companyid = +localStorage.getItem('company_id');
    console.log('updated user obj',this.updatedUser);
    
  //console.log(this.user.phoneNumber);
//  console.log(this.user.userName);
  this.updateusersrv.update_user_id(this.updatedUser).subscribe((res: any)=>{
   console.log(res);
   alert('User updated successfully');
   //this.router.navigateByUrl('home/users');
  },error=>{
    console.error('error in update api of user');
    alert('user could not be updated! Try again');
    //this.router.navigate(['/superadmin/manageUser']);
    return throwError(error);
  });
  }
}
