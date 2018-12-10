import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { ManagecompaniesComponent } from './managecompanies/managecompanies.component';
import { ManageprojectsComponent } from './manageprojects/manageprojects.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManageIntegrationsComponent } from './manage-integrations/manage-integrations.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CreatedocumentComponent } from './createdocument/createdocument.component';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { RawLeadsComponent } from './raw-leads/raw-leads.component';
import { CurrentLeadsComponent } from './current-leads/current-leads.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyfileComponent } from './myfile/myfile.component';
import { PerformanceComponent } from './performance/performance.component';
import { AlreadybookedComponent } from './alreadybooked/alreadybooked.component';
import { NotconnectedComponent } from './notconnected/notconnected.component';
import { VisitdoneComponent } from './visitdone/visitdone.component';
import { VisitonComponent } from './visiton/visiton.component';
import { VisitdeadComponent } from './visitdead/visitdead.component';
import { FollowupComponent } from './followup/followup.component';
import { NoworkComponent } from './nowork/nowork.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';
import { ResaleComponent } from './resale/resale.component';
import { BookedDoneComponent } from './booked-done/booked-done.component';
import { DeadCountComponent } from './dead-count/dead-count.component';
import { RentCountComponent } from './rent-count/rent-count.component';
import { PlotCountComponent } from './plot-count/plot-count.component';
import { DuplicateComponent } from './duplicate/duplicate.component';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { DocumentComponent } from './document/document.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { ReportsComponent } from './reports/reports.component';
import { NoWorkComponent } from './no-work/no-work.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
@NgModule({
  imports: [
    CommonModule,
    GooglePlaceModule,
    CustomersRoutingModule,
    NgMultiSelectDropDownModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.rectangleBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#7d9156', 
      secondaryColour: '#f7b332', 
      tertiaryColour: '#d25e30'
      
      
  }),
  FormsModule,
  ReactiveFormsModule,
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyBYBY5dswX8ks7M7c7YoQinAEgYwEHg1Ds'
  }),
  ],
  declarations: [CustomerListComponent, CustomerAddComponent, NavigationComponent, FooterComponent, HomeComponent, ManagecompaniesComponent, ManageprojectsComponent, ManageusersComponent, ManageIntegrationsComponent, CreateUserComponent, CreateProjectComponent, CreateCompanyComponent, CreatedocumentComponent, RawLeadsComponent, CurrentLeadsComponent, MyfileComponent, PerformanceComponent, AlreadybookedComponent, NotconnectedComponent, VisitdoneComponent, VisitonComponent, VisitdeadComponent, FollowupComponent, NoworkComponent, OtherProjectsComponent, ResaleComponent, BookedDoneComponent, DeadCountComponent, RentCountComponent, PlotCountComponent, DuplicateComponent, DocumentComponent, MyTeamComponent, UpdateUserComponent, UpdateCompanyComponent, ReportsComponent, NoWorkComponent, SuperadminComponent,]
})
export class CustomersModule { }
