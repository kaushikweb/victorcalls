import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {
modalRef: BsModalRef;
myApp='ngModal-----';
  constructor(private bsmodalservice: BsModalService) { }

  ngOnInit() {
  }
  open(template: TemplateRef<any>) {
    this.modalRef = this.bsmodalservice.show(template);
  }
}
