import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared';
import {PasswordModule} from 'primeng/password';
import {DropdownModule} from 'primeng/dropdown';

import {
  AutoCompleteModule,
  ButtonModule,
  DialogModule,
  GrowlModule,
  InputTextareaModule,
  ContextMenuModule,
  InputTextModule,
  SharedModule,
  SplitButtonModule,
  TabViewModule,
  TooltipModule

} from 'primeng/primeng';

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        BrowserModule,              
        ReactiveFormsModule,
        FormsModule,  
        CommonModule,       
        BrowserAnimationsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        PasswordModule,
        DropdownModule,        
        AutoCompleteModule,
        ButtonModule,
        DialogModule,
        GrowlModule,
        InputTextareaModule,
        ContextMenuModule,
        InputTextModule,
        SharedModule,
        SplitButtonModule,
        TabViewModule,
        TooltipModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
