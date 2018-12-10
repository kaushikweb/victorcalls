import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ResourceURI } from '../apilist/resource-uri';
import { Observable } from 'rxjs';
import { Company } from '../modal/company';
import { Registration } from '../modal/Registration';
import { UserRegister } from '../modal/user-register';
import { Project } from '../modal/project';
import { stringify } from 'querystring';
import { MyLead } from '../modal/MyLead';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { User } from '../modal/User';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

const httpOptionsLogin = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};


const httpOptions2 = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data',
                              'boundary': ','    })
};
@Injectable({
  providedIn: 'root'
})
export class VictorServiceService {

  constructor(private http: HttpClient) { }
  public login(userData:User):Observable<any> {
    let   grant_type = 'password';
    console.log('Login API called');
    return this.http.post(ResourceURI.pLogin,
      "username="+userData.username+"&password="+userData.password+
      "&grant_type="+userData.grant_type,httpOptionsLogin);
} // end of login

getAllCompanies(){
  const httpOptionsAuthG = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json',
                                'Authorization': 'Bearer '+localStorage.getItem('vctoken')})
   };
   //this.vcheaders.append('Authorization', sessionStorage.getItem('vctoken'));
   return this.http.get(ResourceURI.gCompanies, httpOptionsAuthG);
 }
 get_user_of_company(userName){
  return this.http.get(ResourceURI.gUser+userName, httpOptions);
}
public get_projects_of_company(userName){
  return this.http.get(ResourceURI.gCmpProjects+userName, httpOptions);
}  
public getAllProjectsA(projectid){
  return this.http.get(ResourceURI.gAllProjectsA +projectid, httpOptions);
} 
public get_leads_count_company(userName){
  return this.http.get(ResourceURI.gLeadsCount+userName, httpOptions);
}
public get_uers_roles_company(){
  return this.http.get(ResourceURI.gUserRole, httpOptions);
}
public p_user_company(cmp: Company):Observable<any>{
  return this.http.post(ResourceURI.pCompany,cmp, httpOptions);
} 
public p_create_user(user: Registration):Observable<any>{
  return this.http.post(ResourceURI.pAddUser,user, httpOptions);
} 
// uploads excel file
public p_upload_file(formdata: FormData,userName):Observable<any> {
  return this.http.post(ResourceURI.pUploadExcelLeads+userName, formdata);
}
public p_create_project(project:Project):Observable<any> {
  return this.http.post(ResourceURI.pCreateProject,project,httpOptions);
}

public g_document_prjid(projid):Observable<any> {
  return this.http.get(ResourceURI.gDocument+projid+'/documents',httpOptions);
}
public p_upload_prjid(frmData:FormData,projectID):Observable<any> {
  //let prjIDn = +projectID;
  return this.http.post(ResourceURI.pUpload+projectID+'/Document',frmData);
}
public g_leads(company_id):Observable<any> {
  return this.http.get(ResourceURI.gLeads+company_id,httpOptions);
}
public g_rawLeads_with_paging(CompanyId,pno):Observable<any> {
  //aarif&pagesize=10&pagenumber=1
  let addUrl = CompanyId+'&pageSize=10&pageNumber='+String(pno);
  return this.http.get(ResourceURI.gRawLeadsByCompId+addUrl,httpOptions);
}

public updateLeads(lead:MyLead ,leadid):Observable<any> {
  return this.http.put(ResourceURI.upadteLeads+leadid,lead,httpOptions);
}
public gUserByProjectId(projectID):Observable<any> {
  return this.http.get(ResourceURI.gUsersOfProject+projectID+ '/users',httpOptions);
}
public getLocation(userName):Observable<any>{
  return this.http.get(ResourceURI.getLocation+userName,httpOptions);
}
public update_user_id(user: Registration):Observable<any>{
  return this.http.put(ResourceURI.upadteUser,user,httpOptions);
}
public update_company_id(company:Company):Observable<any>{
  return this.http.put(ResourceURI.updateCompany+company.companyId,company,httpOptions);
}
public getOtherLeads(companyId,statusId):Observable<any>{
  return this.http.get(ResourceURI.otherLeads+companyId+'&statusId='+statusId,httpOptions);
}

public getCmpLeadsByStatus(companyId,statusId) {
  return this.http.get(ResourceURI.gLeadsWithStatusIdAndCompanyId + companyId+'&statusid='+statusId, httpOptions);
}// end of getUrlLeads


public exportAsExcelFile(json: any[], excelFileName: string): void {
  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
  const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  this.saveAsExcelFile(excelBuffer, excelFileName);
}
private saveAsExcelFile(buffer: any, fileName: string): void {
   const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
   FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
}
public getReport(projectid,userid){
  return this.http.get(ResourceURI.gdownloadReport+projectid+'/'+userid,httpOptions);
}
}
