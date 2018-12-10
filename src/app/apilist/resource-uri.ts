export  class ResourceURI {
    private static host = 'http://www.77clicks.com';
    //private static hostn = 'http://192.168.1.33:8000';
   // private static host = 'http://aarifdemo.tk';
    
    public static pLogin = ResourceURI.host + '/token';  // for login post api


    // count of different leads
    //leads/leadStatusCounts
    public static gLeadCount = ResourceURI.host + '/api/Leads/leadStatusCounts?userName=';

    // get raw leads by userName
    public static gRawLeads =ResourceURI.host + '/api/Leads/Company/RawLeads?userName=';
     
    // get raw leads by companyId
     public static gRawLeadsCmp =ResourceURI.host + '/api/Leads/Company/RawLeads?companyId=';

    //get leads by statusId
    //'/api/Leads/Company?username=vedagya19&statusid='
    public static gLeadsByStatusId =ResourceURI.host + '/api/Leads/Company?userName=';

    // get raw 10 leads at a time with page number
    public static gTenRawLeadsPno =ResourceURI.host + '/api/Leads/Company/RawLeadsWithPaging?userName=';
                   
    // '/api/leads/Company/RawLeadsWithPaging?userName=vedagya19&pagesize=10&pagenumber=';
    // get raw leads 10 at a time with page number
    public static gTenRawLeadsPnoN =ResourceURI.host + 
                    '/api/Leads/Company/RawLeadsWithPaging?userName=';
    
    
    // post a project
    public static pProject = ResourceURI.host + '/api/Account/Project';

    // get all documents
    ///api/Account/Projects?userName=vedagya19
    public static gAllDocuments = ResourceURI.host + '/api/Account/Projects?userName=';

    // get documents of a project by projectId
    public static gDocumentByProjectID = ResourceURI.host + '/api/Account/Project/';

    // post document of a project
    //http://api.victorcalls.com/api/account/Project/1/Document
    public static pDocumentOfProject = ResourceURI.host + '/api/Account/Project/';

    
    //api/account/register:   http://api.victorcalls.com/api/account/register
    public static pAddUser = ResourceURI.host + '/api/Account/register';
    //http://api.victorcalls.com/api/Account/Users?userName=vedagya19: get user

    //http://api.victorcalls.com/api/Account/Roles : get user role

    public static gUserRole = ResourceURI.host + '/api/Account/Roles';
   //http://api.victorcalls.com/api/Account/Projects?userName=vedagya19
   // public static gUserProject = ResourceURI.host +'/api/Account/Projects?userName=';
   
    public static gCmpProjects = ResourceURI.host +'/api/Account/projects?userName=';
    public static gLeadsCount = ResourceURI.host +'/api/Leads/leadStatusCounts?userName=';
    //update user
    public static uUser = ResourceURI.host +'/api/Account/User';

    //delete user
    public static dUser = ResourceURI.host +'/api/Account/delete';
    
    // get user by login userName
    
    public static gUser = ResourceURI.host + '/api/Account/Users?userName=';

    // get user by companyId
    public static gUserCmp = ResourceURI.host + '/api/Account/Users?companyId=';

    //get companies http://api.victorcalls.com/api/Account/Companies
    public static gCompanies = ResourceURI.host + '/api/Account/Companies';

    public static gCompany = ResourceURI.host + '/api/Account/Company';

    //PUT: update company
    //http://api.victorcalls.com/api/Account/Company/<companyId>
    public static uCompany = ResourceURI.host + '/api/Account/Company/';
  
// add company: POST
    public static pCompany = ResourceURI.host + '/api/Account/Company';

    public static dCompany = ResourceURI.host + '/api/Account/Company/delete';

    //  getting integrations of a company - 
    //http://api.victorcalls.com/api/Account/Company/1/Integrations
    public static gIntegrataions = ResourceURI.host + '/api/Account/Company/';

    //getting particular integration 
    //http://api.victorcalls.com/api/Account/Company/1/Integrations/1
    //public static gIntegration = ResourceURI.host + '/api/Account/Company/1/Integrations/1';

   //http://api.victorcalls.com/api/Account/Company/1/Integrations
   public static pIntegration = ResourceURI.host + '/api/Account/Company/';

   //http://api.victorcalls.com/api/account/projects?userName=vedagya19  get projects
   

   // get projects list
   public static gAllProjects = ResourceURI.host +'/api/Account/projects?userName=';
   public static gAllProjectsA = ResourceURI.host +'/api/Account/projects?userName=';

   //get project by companyId
   public static gProjectsOfCompany = ResourceURI.host+ '/api/Account/Projects?companyId=';


   //post seleted leads
   public static pLeads = ResourceURI.host +'/api/Leads/';

   //http://api.victorcalls.com/api/account/Project/1/Users  get users
   public static gUsers = ResourceURI.host +'/api/Account/Project/';

   //get locations
  // public static gLocations = ResourceURI.host + 'api/leads/locations?userName=';

  //50.62.160.53/ph12513175871/Modinagar@7/21
  public static gLocations = ResourceURI.host + '/api/Leads/locations?userName=';

  //get Api for getting Leads
  //api/Leads/Company?CompanyID=1&statusid=2
  public static gLeadsWithStatusIdAndCompanyId = ResourceURI.host + '/api/Leads/Company?CompanyId=';

  //get rawLeads by companyId with pagination
    public static gRawLeadsByCompId = ResourceURI.host + '/api/Leads/Company/RawLeadsWithPaging?CompanyId=';
///api/account/LeadSource/Validate?startDate=09/11/2018&endDate=11/11/2018&CompanyId=46
    public static pTestIntegration = ResourceURI.host + '/api/Account/LeadSource/Validate?';


  

    //http://192.168.1.41:8000/api/Account/leads/excel/upload/companyid/1
      public static pUploadExcelLeads = ResourceURI.host + '/api/Leads/ExcelUpload?userName=';

    //http://192.168.1.41:8000/api/Account/projects/create/ 
    public static pCreateProject = ResourceURI.host + '/api/Account/projects/create/'; 
    // http://192.168.1.41:8000/api/Account/documents/project/1 
    public static gDocument = ResourceURI.host + '/api/Account/Project/'; 

    public static pUpload = ResourceURI.host + '/api/account/Project/';

   // http://192.168.1.41:8000/api/Account/leads/companyid/100
   public static gLeads = ResourceURI.host + '/api/Account/leads/companyid/';  

  // /api/leads/Company/RawLeadsWithPaging?userName=aarif&pagesize=10&pagenumber=1
  public static gRawLeadswithpaging = ResourceURI.host + '/api/Leads/Company/RawLeadsWithPaging?userName=';

  //public static gRawLeadsByCompId = ResourceURI.host + '/api/Leads/Company/RawLeadsWithPaging?CompanyID=';

  //http://192.168.1.41:8000//api/Leads/243
  public static upadteLeads = ResourceURI.host + '/api/Leads/';

  //http://192.168.1.41:8000/api/Account/users/projectid/1
  public static gUsersOfProject = ResourceURI.host + '/api/account/Project/';

  public static getLocation = ResourceURI.host + '/api/Leads/locations?userName=';

  //http://192.168.1.41:8000/api/Account/user/userid/1
  public static upadteUser = ResourceURI.host + '/api/Account/User';

  //http://192.168.1.41:8000/api/Account/company/companyid/1
  public static updateCompany = ResourceURI.host + '/api/Account/Company/'
//Leads?userName=aarif&statusID=1
  public static otherLeads = ResourceURI.host + '/api/Leads/Company?CompanyID='

 // http://192.168.1.33:8000/api/Account/Reporting/1/1
 public static gdownloadReport = ResourceURI.host + '/api/Account/Reporting/';
}
