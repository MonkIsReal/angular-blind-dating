import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {Routes,RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';
import {FlexLayoutModule } from '@angular/flex-layout';
import { NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SigninComponent } from './signin/signin.component';
import { SurveyComponent } from './survey/survey.component';
import { SidenavService } from './sidenav.service';


const route:Routes=[
{path: '', component: WelcomeComponent},
{path: 'sign_in', component: SigninComponent},
{path:'user', loadChildren:'./usermanagement/usermanagement.module#UsermanagementModule'},

{path:'**', redirectTo:'WelcomeComponent'}
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    WelcomeComponent,
    SigninComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    NgbCarouselModule.forRoot(),
    RouterModule.forRoot(route)
  ],
  providers: [ SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
