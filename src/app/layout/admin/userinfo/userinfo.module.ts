import { NgModule,Injectable  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserinfoRoutingModule } from './userinfo-routing.module';
import { UserinfoComponent } from './userinfo.component';
import { PageHeaderModule } from './../../../shared';
import {TableModule} from 'primeng/table';
import { SelectItem } from 'primeng/components/common/api';
import {Http, Response} from '@angular/http';
import {DialogModule} from 'primeng/dialog';

import { ReactiveFormsModule,FormsModule,FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';


import {  
  ButtonModule,
  PanelModule
} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    UserinfoRoutingModule,
    PageHeaderModule,
    TableModule,
    DialogModule,
    ButtonModule,
  	PanelModule,
  	ReactiveFormsModule,
  	FormsModule
  ],
  declarations: [UserinfoComponent]
})
export class UserinfoModule { }
