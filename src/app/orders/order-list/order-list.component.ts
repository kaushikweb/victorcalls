import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  customer_add_page(){
    console.log('go to customer add add page');
    this.router.navigateByUrl('customers/abc');
  }
}
