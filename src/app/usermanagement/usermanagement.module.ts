import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { MaterialModule } from '../shared/material.module';
import { Routes,RouterModule } from '@angular/router';
import { UserwelcomeComponent } from './component/userwelcome/userwelcome.component';
import { SurveyresultComponent } from '../surveyresult/surveyresult.component';

import {FlexLayoutModule } from '@angular/flex-layout';
import { SurveyComponent } from '../survey/survey.component';
const route:Routes=[
  {path: '', component: SidenavComponent,
    children:[
      {path: '', component: UserwelcomeComponent},
      {path: 'survey', component: SurveyComponent},
      {path: 'surveyresult/:score', component: SurveyresultComponent}
    ]
 },

  {path:'**', redirectTo:'SidenavComponent'}
  ];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(route)
  ],
  declarations: [SidenavComponent, UserwelcomeComponent,SurveyComponent,SurveyresultComponent],

})
export class UsermanagementModule { }
