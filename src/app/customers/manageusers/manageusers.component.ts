import { Component, OnInit } from '@angular/core';
import { Registration } from '../../modal/Registration';
import { Router } from '@angular/router';
import { VictorServiceService } from '../../apiService/victor-service.service';
import { Role } from '../../modal/Role';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {
  users: Registration[];
  userD: Registration;
  sUser : Registration;
  loading=false;
  //role: Role;
  display;
    constructor(private userService:VictorServiceService, private router: Router ) {
      this.users = [];
      this.sUser = new Registration();
      this.sUser.role = new Role();
      this.loading=true;
      this.userService.get_user_of_company(localStorage.getItem('userName')).subscribe((data: Registration[])=>{
        this.users = data;
        this.loading=false;
        console.log('Users',this.users);
       // console.log(this.users);
        
        //console.log('projects', this.projects);
      });
  
     }
  
    ngOnInit() {
       /** spinner starts on init */
      // this.spinner.show();
   
       setTimeout(() => {
           /** spinner ends after 5 seconds */
         //  this.spinner.hide();
       }, 3000);
    }
  
  
  createUser(){
    console.log('createUser');
   this.router.navigate(['home/createuser']);
  }
  updateUser(index:number){
    console.log('updateUser');
    //localStorage.setItem('updateId',id);
    localStorage.setItem('update_user', JSON.stringify(this.users[index]));
    this.router.navigateByUrl('home/update-user');
  }
  deleteUser(userD:Registration){
    console.log('deleteUser');
    this.userD = userD;
   // console.log(userD);
  
  }
  confirmDelete(){
    console.log('confirm delete');
    //this.display='none'; 
   // $.modal.close();
    // this.userService.deleteUser(this.userD).subscribe((res:any)=>{
    //   //this.users = data;
    //  // console.log(this.users);
    //  /// console.log(res);
    //   //console.log('projects', this.projects);
    // });
  
  }
  showUser(user:Registration){
    console.log('Show User');
    this.sUser = user;
  }
  }
  
