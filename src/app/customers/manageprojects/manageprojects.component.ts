import { Component, OnInit } from '@angular/core';
import { Project } from '../../modal/project';
import { VictorServiceService } from '../../apiService/victor-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageprojects',
  templateUrl: './manageprojects.component.html',
  styleUrls: ['./manageprojects.component.css']
})
export class ManageprojectsComponent implements OnInit {
  map: any;
  loading=false;
  message:string;
  showPosition;
address: any;
geoAddress: any;
  form1 = false;
 
bExcel = false;
  form2 = false;
  projects: Project[];
  files: FileList;
  filestring: string;
  fi = false;
  fim;
  project: Project;
  document: Document;
  constructor(private prjService: VictorServiceService, private http: HttpClient, 
    private data: VictorServiceService, private router: Router) {
      this.project = new Project();
      this.document = new Document();
      //this.document.dFile ='sd';
      //this.document.name = 'zfg';
        this.loading=true;
        this.prjService.get_projects_of_company(localStorage.getItem('userName')).subscribe((data: Project[])=>{
        this.projects = data;
        this.loading=false;
        console.log(this.projects);
        
      });
   }

  ngOnInit() {
  }
  createProject(){
    this.router.navigateByUrl('home/createproject')
  }
  getDocuments(projectId){
    localStorage.setItem('project_id',projectId);
    console.log(localStorage.getItem('project_id'));
    this.router.navigateByUrl('home/document');
  }
}
