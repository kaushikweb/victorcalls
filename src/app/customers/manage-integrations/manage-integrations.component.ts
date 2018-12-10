import { Component, OnInit } from '@angular/core';
import { Integrations } from 'src/app/modal/integrations';
import { Router } from '@angular/router';
import { VictorServiceService } from 'src/app/apiService/victor-service.service';

@Component({
  selector: 'app-manage-integrations',
  templateUrl: './manage-integrations.component.html',
  styleUrls: ['./manage-integrations.component.css']
})
export class ManageIntegrationsComponent implements OnInit {

integrations: Integrations[];
integ = false;
loading=false;
newIntegration: Integrations;
companyName;
companyId;
sourceList=['99 acres', 'Facebook', 'Excelsheet', 'Google', 'Magic Bricks'];

  constructor(private router:Router,private integrationsrv:VictorServiceService) {
    this.integrations = [];
    this.newIntegration = new Integrations();
    // this.newIntegration.sourcetype = new IdName();
   }

  ngOnInit() {
  }

  showForm(){
    sessionStorage.setItem('cmpIdForInteg',this.companyId);
    sessionStorage.setItem('cmpNameForInteg',this.companyName);
   this.router.navigate(['/userhome/createIntegration']);
  }
  
}
