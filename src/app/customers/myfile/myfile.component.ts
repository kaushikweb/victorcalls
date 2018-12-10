import { Component, OnInit } from '@angular/core';
import { Leads } from 'src/app/modal/Leads';
import { Router } from '@angular/router';
import { VictorServiceService } from 'src/app/apiService/victor-service.service';
import {throwError} from 'rxjs';
import { Company } from '../../modal/company';

// const HttpUploadOptions = {
//   headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
// }
@Component({
  selector: 'app-myfile',
  templateUrl: './myfile.component.html',
  styleUrls: ['./myfile.component.css']
})
export class MyfileComponent implements OnInit {

  myFiles:string [] = [];
  myFile:string [] = [];
  headers1: Headers;
  sMsg;
  loading=false;
  companies: Company[];
  fileList: Leads[];
  btnDisabled = true;
  constructor(private router:Router,private uploadsrv:VictorServiceService) {
    this.fileList = [];
    
   }

  ngOnInit() {
  }

  getFileDetails (e) {
    //console.log (e.target.files);
    for (var i = 0; i < e.target.files.length; i++) { 
      this.myFiles.push(e.target.files[i]);
    }
    this.btnDisabled = false;

  }
  uploadExcelFiles(){
    const frmData = new FormData();
    for (var i = 0; i < this.myFiles.length; i++) { 
      frmData.append("file", this.myFiles[i]);
      
    }
    this.uploadsrv.p_upload_file(frmData,localStorage.getItem('userName')).subscribe(res=>{
      console.log('excel file uploaded',res);
      alert('file uploaded successfully');
     this.router.navigateByUrl('home');
    },error=>{
      
      this.loading = false;
      alert('file could not uploadeded');
      console.error('Error in Upload raw leads');
      return throwError(error);
     });
   // this.router.navigate(['/userhome/home']);
   }
//    downloadFile(){
//    console.log('File Downloaded');
//  }

cancel(){
  this.router.navigateByUrl('home');
}
}
