import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';

import { ManagecompaniesComponent } from './managecompanies/managecompanies.component';
import { LoginComponent } from '../orders/login/login.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManageprojectsComponent } from './manageprojects/manageprojects.component';
import { ManageIntegrationsComponent } from './manage-integrations/manage-integrations.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreatedocumentComponent } from './createdocument/createdocument.component';
import { RawLeadsComponent } from './raw-leads/raw-leads.component';
import { CurrentLeadsComponent } from './current-leads/current-leads.component';
import { MyfileComponent } from './myfile/myfile.component';
import { PerformanceComponent } from './performance/performance.component';
import { AlreadybookedComponent } from './alreadybooked/alreadybooked.component';
import { BookedDoneComponent } from './booked-done/booked-done.component';
import { DeadCountComponent } from './dead-count/dead-count.component';
import { DuplicateComponent } from './duplicate/duplicate.component';
import { FollowupComponent } from './followup/followup.component';
import { NotconnectedComponent } from './notconnected/notconnected.component';
import { VisitdoneComponent } from './visitdone/visitdone.component';
import { VisitonComponent } from './visiton/visiton.component';
import { VisitdeadComponent } from './visitdead/visitdead.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';
import { RentCountComponent } from './rent-count/rent-count.component';
import { PlotCountComponent } from './plot-count/plot-count.component';
import { DocumentComponent } from './document/document.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { ReportsComponent } from './reports/reports.component';
import { NoworkComponent } from './nowork/nowork.component';
import { ResaleComponent } from './resale/resale.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {path:'',component:CustomerAddComponent},
      
      {path:'cmp',component:ManagecompaniesComponent},
      {path:'users',component:ManageusersComponent},
      {path:'projects',component:ManageprojectsComponent},
      {path:'integ',component:ManageIntegrationsComponent},
      {path:'createuser',component:CreateUserComponent},
      {path:'createproject',component:CreateProjectComponent},
      {path:'createcompany',component:CreateCompanyComponent},
      {path:'createdoc',component:CreatedocumentComponent},
      {path:'raw',component:RawLeadsComponent},
      {path:'current',component:CurrentLeadsComponent},
      {path:'upload',component:MyfileComponent},
      {path:'ch',component:PerformanceComponent},
      {path:'already',component:AlreadybookedComponent},
      {path:'booked',component:BookedDoneComponent},
      {path:'dead',component:DeadCountComponent},
      {path:'duplicate',component:DuplicateComponent},
      {path:'follow',component:FollowupComponent},
      {path:'notconnected',component:NotconnectedComponent},
      {path:'visitdone',component:VisitdoneComponent},
      {path:'visiton',component:VisitonComponent},
      {path:'visitdead',component:VisitdeadComponent},
      {path:'otherproject',component:OtherProjectsComponent},
      {path:'rent',component:RentCountComponent},
      {path:'plot',component:PlotCountComponent},
      {path:'document',component:DocumentComponent},
      {path:'myteam',component:MyTeamComponent},
      {path:'update-user',component:UpdateUserComponent},
      {path:'update-company',component:UpdateCompanyComponent},
      {path:'reports',component:ReportsComponent},
      {path:'nowork',component:NoworkComponent},
      {path:'resale',component:ResaleComponent}
      
      //{path: '**', component:LoginComponent}
    ]},
    
 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
