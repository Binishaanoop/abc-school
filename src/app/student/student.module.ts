import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AppModule } from '../app.module';
import { RouterModule } from '@angular/router';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TListComponent } from './t-list/t-list.component';
import { STeacherComponent } from './s-teacher/s-teacher.component';


@NgModule({
  declarations: [
    StudentComponent,
    StudentDashboardComponent,
    StudentProfileComponent,
    TListComponent,
    STeacherComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    RouterModule,
    // AppModule

  ]
})
export class StudentModule {


}