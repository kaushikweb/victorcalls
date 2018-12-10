import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VictorServiceService } from '../../apiService/victor-service.service';
import { Company } from '../../modal/company';
import { FormGroup, FormControl , Validators } from '@angular/forms';
@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  createCompanyForm;
  cpB=false;
  countryList =["Select country","Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];
  addressB=false;
  loading=false;
  phoneB=false;
  stateB=false;
  cityB=false;
  phoneB0=false;
  phoneCB=false;
  phoneCB0 = false;
  companyNameB=false;
  //cpB=flase
  companyName="";
  email="";
  phone="";
  contactPersonName="";
  contactEmail="";
  emailB=false;
  emailC = false;
  country="";
  state="";
  city="";
  companyAddress="";
  contactPhone="";
  activation="";
 company:Company;
 isActivate;
  constructor(private router:Router,private compsrv:VictorServiceService) { 
    this.company = new Company();
    this.createCompanyForm=new FormGroup({
      'companyName':new FormControl('',Validators.compose([Validators.required])),
      'email':new FormControl('',Validators.compose([Validators.required])),
      'phone':new FormControl('',Validators.compose([Validators.required])),
      'contactPersonName':new FormControl('',Validators.compose([Validators.required])),
      'contactEmail':new FormControl('',Validators.compose([Validators.required])),
      'country':new FormControl('',Validators.compose([Validators.required])),
      'state':new FormControl('',Validators.compose([Validators.required])),
      'city':new FormControl('',Validators.compose([Validators.required])),
      'companyAddress':new FormControl('',Validators.compose([Validators.required])),
      'contactPhone':new FormControl('',Validators.compose([Validators.required])),
      'activation':new FormControl('',Validators.compose([Validators.required])),
    });
  }

  ngOnInit() {
  }

  createCompany(createCompanyForm){
    this.companyName=createCompanyForm.companyName;
    this.email=createCompanyForm.email;
    this.phone=createCompanyForm.phone;
    this.contactPersonName=createCompanyForm.contactPersonName;
    this.country=createCompanyForm.country;
    this.companyAddress=createCompanyForm.companyAddress;
    this.contactPhone=createCompanyForm.contactPhone;
    this.activation=createCompanyForm.activation;
    this.contactEmail=createCompanyForm.contactEmail;
    this.state=createCompanyForm.state;
    this.city=createCompanyForm.city;

    // if(this.companyName.length===0||this.email.length===0||
    //   this.phone.length===0||this.contactPersonName.length===0||
    //   this.country.length===0||this.companyAddress.length===0||
    //   this.contactPhone.length===0||this.activation.length===0||
    //   this.contactEmail.length===0||this.state.length===0||this.city.length===0){
    //   console.log(this.companyName,this.email,this.phone,
    //     this.contactPersonName,this.country,this.contactPhone,this.activation,
    //     this.activation,this.contactEmail,this.state,this.city);
    //     alert('Please Fill All Filed');
    //     return;
    // }else{
      this.company.activatedTill ="2020-05-01T08:30:00";
      this.company.companyId=0;
      console.log('Submitted Company',this.company);
    //  this.loading=true;
     
      this.compsrv.p_user_company(this.company).subscribe((res:any)=>{
      console.log('submitted post api');
      //this.loading=false;
      this.router.navigateByUrl('home/cmp');  

  
    });
 // alert('Form Submitted');
 alert('Company Added Successfully');
//    }
    
     }

     cancelCompany(){
       this.router.navigateByUrl('home/cmp');
       console.log('cancel form');
     }

     validateEmail(){
      console.log('validate email');
      let rex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //return re.test(email);
      //  this.emailB = rex.test(this.company.email);
        if(rex.test(this.company.email)==false){
            this.emailB = true;
        }else{
          this.emailB = false;
        }
      //  console.log('email:', this.company.email);
        //console.log('email validate:',this.emailB);
    }
   // isActivate" (change)="
    activateCompany(){
// if(this.isActivate==true){
//   this.company.isActivated = '1';
// }
// else{
//   this.company.isActivated = '0';
// }
    }
    validateCity(){
    let rex=/^[^-._@\s][a-zA-Z.\s]{2,50}$/;
    if(rex.test(this.company.city)==false){
      this.cityB = true;
  }else{
    this.cityB = false;
  }
    }
    validateState(){
      let rex=/^[^-._@\s][a-zA-Z.\s]{2,50}$/;
      if(rex.test(this.company.state)==false){
        this.stateB = true;
    }else{
      this.stateB = false;
    }
    }
    validateEmailC(){
      console.log('validate email');
      let rex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //return re.test(email);
      //  this.emailB = rex.test(this.company.email);
        if(rex.test(this.company.contactEmail)==false){
            this.emailC = true;
        }else{
          this.emailC = false;
        }
      //  console.log('email:', this.company.email);
        //console.log('email validate:',this.emailB);
    }
    validateCpName(){
      console.log(this.company.contactPersonName);
      let rex = /^[a-zA-Z\s]{2,50}$/; // START WITH a-zA-z, end with a-z, min length 2, max len 30
      if(rex.test(this.company.contactPersonName)==false){
        this.cpB = true;
    }else{
      this.cpB = false;
    }
    }
    validateCompanyName(){
      //let rexF = /^[\\p{L} .'-&]+$/;
      //let rex = /^[a-zA-Z0-9](&|.| )[a-zA-Z0-9]){50}$/;
      let rex = /^[^-_@\s][A-Za-z0-9.&@-_\s]{2,50}$/;
     // console.log(this.company.companyName);
     if(rex.test(this.company.companyName)==true){
         console.log('match');
         this.companyNameB=false;
      }else{
        console.log('not match');
        this.companyNameB = true;
      }
    }
    validateAddress(){
      let rex = /^[^&-_@\s][A-Za-z0-9.&@-_#\s]{2,100}$/;
      console.log(this.company.companyAddress);
       
      if(rex.test(this.company.companyAddress)==true)
         {
            this.addressB = false;
            console.log('match');
            return;  
          }else{
                  this.addressB=true;
                  console.log('not match');
                  return;
                }
  
    }
    validatePhoneC(){
      // let rex = /^[0-9]{10}$/;
      // console.log(this.company.contactphone);
      // let len = this.company.contactphone.length;
      // let v=+this.company.contactphone;
      // let i=Math.pow(10,len-1);
      // if(rex.test(this.company.contactphone)==true)
      //    {
      //           this.phoneCB=false;
      //           if(v/i<1){
      //             this.phoneCB0=true;
      //             this.phoneCB=false;
      //             return;
      //             //this.lblP=false;
      //             }else{
              
      //               this.phoneCB0=false;
      //               return;
      //             }
      //     }else{
      //             this.phoneCB=true;
      //             this.phoneCB0=false;
      //             return;
      //           }
  
    }
    validatePhone(){
      ///^[A-Za-z0-9]+([&_ -]){50}$/
      let rex = /^[0-9]{10}$/;
      console.log(this.company.phone);
      let len = this.company.phone.length;
      let v=+this.company.phone;
      //console.log(v,len);
      //console.log(this.company.phone,len);
      let i=Math.pow(10,len-1);
     // console.log(v,i);
     // console.log(v/i);
     // console.log('value',v);
      if(rex.test(this.company.phone)==true)
         {
                this.phoneB=false;
                if(v/i<1){
                  this.phoneB0=true;
                  this.phoneB=false;
                  return;
                  //this.lblP=false;
                  }else{
              
                    this.phoneB0=false;
                    return;
                  }
          }else{
                  this.phoneB=true;
                  this.phoneB0=false;
                  return;
                }
    }  
}
