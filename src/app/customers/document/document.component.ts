import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/modal/document';
import { Router } from '@angular/router';
import { VictorServiceService } from 'src/app/apiService/victor-service.service';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  documents: Document[];
  newDoc: Document;
  form1 = false;
  loading=false;
  myFiles:string [] = [];
  myFile:string [] = [];
//message:string;
numberOfRecord;
  constructor(private router:Router, private documentsrv:VictorServiceService) { 
    this.newDoc = new Document();
    this.documents = [];
  }

  ngOnInit() {
    this.loading=true;
    this.documentsrv.g_document_prjid(localStorage.getItem('project_id')).subscribe((data: Document[])=>{
      this.documents = data;
      this.loading=false;
      console.log('Documents',this.documents,localStorage.getItem('project_id'));
      this.numberOfRecord = this.documents.length;
     console.log('documents', this.documents);
    });
  }

  showForm(projectId){
    localStorage.setItem('project_id',projectId);
    this.router.navigateByUrl('home/createdoc');
    //createDocument
    //this.router.navigate(['/admin']);
   }
}
