import { Component,TemplateRef } from '@angular/core';
import {BsModalService } from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Router } from '@angular/router';
import { User } from './modal/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  modalRef: BsModalRef;
  loginForm;
bUserName= false;
bPassword = false;
bForm = false;
val1: string;
val2: string;
result: any;
result1: any;
failedLogin = false;
loginResult;

public userData: User;
constructor(private bsmodalservice: BsModalService,private router: Router){
  
}
  

open(template: TemplateRef<any>) {
    this.modalRef = this.bsmodalservice.show(template);
  }
  customer_page(){
    console.log('customer page');
  }
  order_page(){
    console.log('order page');
  }
 
}
