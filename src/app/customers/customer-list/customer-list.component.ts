import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  order_page(){
    console.log('go to order add page');
    this.router.navigateByUrl('orders/xyz');
  }
}
