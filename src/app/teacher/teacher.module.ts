import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { AppModule } from '../app.module';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';


@NgModule({
  declarations: [
    TeacherComponent,
    TeacherDashboardComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    // AppModule
  ]
})
export class TeacherModule { }
