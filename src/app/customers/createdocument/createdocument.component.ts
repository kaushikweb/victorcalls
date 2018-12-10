import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VictorServiceService } from 'src/app/apiService/victor-service.service';
import { Projdocument } from 'src/app/modal/projdocument';
import {throwError} from 'rxjs';
import { Project } from 'src/app/modal/project';
@Component({
  selector: 'app-createdocument',
  templateUrl: './createdocument.component.html',
  styleUrls: ['./createdocument.component.css']
})
export class CreatedocumentComponent implements OnInit {

  myFiles:string [] = [];
  myFile:string [] = [];
  btnDisabled = true;
  loading;
  newDocument: Projdocument;
  constructor(private router:Router, private createdocumentsrv:VictorServiceService) {
    this.newDocument = new Projdocument();
    console.log('pid',localStorage.getItem('project_id'));

   }

  ngOnInit() {
  }

  getFileDetails (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myFiles.push(e.target.files[i]);
      //this.newDocument.File = e.target.files[i];
    }
    this.btnDisabled = false;

  }

  uploadFiles(){
    
    const frmData = new FormData();
    for (var i = 0; i < this.myFiles.length; i++) { 
      frmData.append("File", this.myFiles[i]);
      frmData.append("brochure","dummy");
      frmData.append("link","dummy.com/doc" );
    }
    //console.log('Upload Document proj id ',localStorage.getItem('project_id'));
    // this.projectID = localStorage.getItem('project_id');
    // console.log('projectid',this.projectID);
   //this.loading=true;
    this.createdocumentsrv.p_upload_prjid(frmData,localStorage.getItem('project_id')).subscribe(res=>{
      console.log('Document Added',res);
      this.loading=false;
      alert('file uploaded successfully');
      // this.router.navigateByUrl('home/document');
    },error =>{
      this.loading=false;
      console.error('error in post api of create document');
      alert('document could not be added, Try again');
      // this.router.navigateByUrl('home/manageCompanies');
      return throwError(error);
    });
  }

  validateText(){
    console.log('Document Name');
  }
  cancel(){
    this.router.navigateByUrl('home/document');
  }

}
