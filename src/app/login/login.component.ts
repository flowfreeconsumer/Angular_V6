import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FlowfreeService } from './../flowfree.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

interface LabelledValue {
    label: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
  	providers: [FlowfreeService]
})
export class LoginComponent implements OnInit {

    public loginError = false;    
    public selectedenv = [];
    public authendicate = false;
	public outinfo = {};
    title = "Login screen...";
    
	public userinfo = {"userId":"sa887m","firstName":"santhoshkumar","lastName":"Arunachalam","credential":"user123"};
    constructor(public router: Router,private flowfreeservice: FlowfreeService) {}
  	
  	printLabel(labelledObj: LabelledValue) {
       console.log("output of label...."+labelledObj.label);
	}
    ngOnInit() {
    	let myObj = {size: 10, label: "Size 10 Object"};
		this.printLabel(myObj);
    }

    onLoggedin() {    	
    
    localStorage.setItem('isLoggedin', 'true');
  
      var headers = new Headers();
      headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      headers.append('Accept','application/json');
      headers.append('content-type','application/json');
      let options = new RequestOptions({ headers:headers});

         
         this.flowfreeservice.login(this.userinfo).subscribe(result => {
        		console.log(result);       
        		this.userinfo =  result;		
        		this.loginError = false;
        		this.authendicate = true;
        		
      		},  err => {
      					this.loginError = true;
      					this.authendicate = false
      					alert(err.statusText);
      					console.log(err.statusText);
    				})  	    				
   		}

   	connect(){
				this.router.navigate(['/dashboard']);

   	}
   }    
	


