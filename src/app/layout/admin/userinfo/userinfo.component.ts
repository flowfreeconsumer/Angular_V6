import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { UserinfoService } from './userinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styles: [],
  animations: [routerTransition()],  
  providers: [UserinfoService]
})
export class UserinfoComponent implements OnInit {
loading: boolean;

 	cols:any[];
    public userinfo : any[];
    public RoleInfoData : any[];
    public selectedTRGRoles : any[];
    public selinfo :{};
    public selectedinfo : any[];
    public TEMPEnvInfoData = [];
    public EnvironmentJsonData : any[];
    public userInformation :{};     
	public supportedEnvironmnts : any[];
	public userRols : any[];
	public UserEnvInfo = [];
    public seluser = false;
    display: boolean = false;
    displayrole: boolean = false;
    displayenv: boolean = false;
    constructor(public router: Router,private userinfoService: UserinfoService) { }

    ngOnInit() {
  
    	this.cols = [
            { field: 'userId', header: 'UserId' },
            { field: 'firstName', header: 'FirstName' },
            { field: 'lastName', header: 'LastName' },
            { field: 'emailId', header: 'EmailId' },
            { field: 'employerName', header: 'EmployerName' },
            { field: 'createDate', header: 'CreateDate' },
            { field: 'submitt', header: 'UserStatus' },
            { field: 'teamname', header: 'TeamName' },
            { field: 'managername', header: 'ManagerName' }
        ];
          this.getAllUsers();   
          this.getAllRoles();
          this.getAllEnvironment();
    }

	
    getAllUsers() {				    	
    	 this.userinfoService.getAllUsers().subscribe(result => { 
    	 			if(result){       		
        				this.userinfo =  result;		        		
        			}
      		},  err => {      					
      					alert(err.statusText);
      					console.log(err.statusText);
    				}) 
			};

	getAllRoles(){
		 this.userinfoService.getAllRoles().subscribe(result => { 
    	 			if(result){       		
        				this.RoleInfoData =  result;		        		
        			}
      		},  err => {      					
      					alert(err.statusText);
      					console.log(err.statusText);
    				}) 
	}

	getAllEnvironment(){
		 this.userinfoService.getAllEnvironment().subscribe(result => { 
    	 			if(result){       		
        				this.EnvironmentJsonData =  result;		        		
        			}
      		},  err => {      					
      					alert(err.statusText);
      					console.log(err.statusText);
    				}) 
	}
    
    addItemButton(target,items,source){
 		for(let index in items){	
 				for(let idx in source){
							if(source[idx].roleId == items[index]){
								target.push(source[idx]);
								source.splice(Number(idx),1);
						}
				}
 	      }
    }	

	 addAllItemButton(target,source){ 		
						for(let idx in source){
							target.push(source[idx]);
							source.splice(Number(idx),1);
						}
 	  }

 	  removeAllItemButton(target,source){
 	  				for(let idx in target){							
						source.push(target[idx]);
						target.splice(Number(idx),1);
					}
 	  }

 	  removeItemButton(target,selectedSRCRoles,source){ 	  
 	  			for(let index in selectedSRCRoles){						
						for(let idx in target){
							if(target[idx].roleId == selectedSRCRoles[index]){
								source.push(target[idx]);
								target.splice(Number(idx),1);
							}
						}
					}
 	  }

		addEnvItemButton(target,items,source) {						
						for(let index in items){							
							target.push(items[index]);
							source.splice(source.indexOf(items[index]),1);
						}				
		}

		addAllEnvItemButton(target,source) {					
						for(let idx in source){							
							target.push(source[idx]);
							source.splice(idx,1);
						}
					
		}


		removeAllEnvItemButton(target,source) {										
					for(let idx in target){							
						source.push(target[idx]);
						target.splice(idx,1);
					}				
		}

		removeEnvItemButton(target,selectedSRCRoles,source) {		
					for(let index in selectedSRCRoles){							
						source.push(selectedSRCRoles[index]);
						target.splice(target.indexOf(selectedSRCRoles[index]),1);
					}
		}

		simpleClone(obj: any) {
		    return Object.assign([], obj);
		}

  public UserRoleInfo = [];public TEMPRoleInfoData = [];
  
	 selectionInfo(info) {			 
			   
			   this.UserRoleInfo = [];
			   this.UserRoleInfo.length = 0;
			   this.selinfo = {};
		       this.selinfo = info;
		       this.seluser = true;
		       this.userInformation = {};
		       this.userInformation = info;
		       this.TEMPRoleInfoData = [];
		       this.TEMPRoleInfoData.length = 0;
		       this.TEMPRoleInfoData = this.simpleClone(this.RoleInfoData);			    
		       this.userRols = this.userInformation["userRoles"]; 
		       this.TEMPEnvInfoData = [];
		       this.TEMPEnvInfoData.length = 0;
		       if(this.userRols !=null){
			       for(let index in this.userRols){								  
						  let roleInfo = this.userRols[index];									
						  
						  for(let idx in  this.TEMPRoleInfoData){						
							 if(this.TEMPRoleInfoData[idx].roleId == roleInfo.roleId){
							  				    this.UserRoleInfo.push(this.TEMPRoleInfoData[idx]);
							  				    this.TEMPRoleInfoData.splice(Number(idx), 1);
												
						 	 }
						 }									
					}
				}  	
					for(let Envidx in  this.EnvironmentJsonData){	
									var name = this.EnvironmentJsonData[Envidx].name;
									var projectname = this.EnvironmentJsonData[Envidx].projectname;
									var proj_name = projectname+"_"+name;
									if(this.TEMPEnvInfoData.indexOf(proj_name) == -1){
										this.TEMPEnvInfoData.push(proj_name);	
									}																
					}

					this.supportedEnvironmnts =  this.userInformation["supportedEnvironments"];					
					for(let idx1 in this.supportedEnvironmnts){
									
									var name = this.supportedEnvironmnts[idx1];									

									if(this.UserEnvInfo.indexOf(name ) == -1){
										this.UserEnvInfo.push(name);	
									}
									
									if( this.TEMPEnvInfoData.indexOf(name ) != -1){
										this.TEMPEnvInfoData.splice(this.TEMPEnvInfoData.indexOf(name ),1);
									}																	
					}						
    		}

    		updateinfo() {    			    			
    			 this.displayrole = false;
    			 this.displayenv = false;
    			 this.display = true;
    		}

    		updateuser(info){    			 
    			 this.userinfoService.updateUser(info).subscribe(result => {
	        		console.log(result);       	        		        		
      		},  err => {
      					
      					console.log(err.statusText);
    				})  	

    		}

    		assignrole(){
    			this.display = false;
    		    this.displayenv = false;
    		    this.displayrole = true;
    		}	

    		assignenv(){    		
    			this.display = false;
    		    this.displayrole = false;
    		    this.displayenv = true;
    		}

    		assignUserRoles(UserInfo,UserEnvInfo){
    		var request: any = {};

    			request.userinfo = UserInfo;
    			request.userRoleInfo= UserEnvInfo;
    			    				
					this.userinfoService.updateUserRoles(request).subscribe(result => {
			        		console.log(result);       	        		        		
		      		},  err => {      					
      					console.log(err.statusText);
    				})  	
    		}

    		assignUserEnvs(UserInfo,UserEnvInfo){
    		            UserInfo["supportedEnvironments"] = [];
    		            UserInfo["supportedEnvironments"].length = 0;												
						for(let idx in UserEnvInfo){
							var envName = UserEnvInfo[idx];
							UserInfo["supportedEnvironments"].push(envName);							
						}

					this.userinfoService.assignUserEnv(UserInfo).subscribe(result => {
			        		console.log(result);       	        		        		
		      		},  err => {      					
      					console.log(err.statusText);
    				})  
    		}
}

