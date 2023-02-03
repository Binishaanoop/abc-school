import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StudentlistComponent } from './principal/studentlist/studentlist.component';
import { TeacherlistComponent } from './principal/teacherlist/teacherlist.component';
import { STeacherComponent } from './student/s-teacher/s-teacher.component';

import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { StudentComponent } from './student/student.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';

const routes: Routes = [
  
  { path: '' , redirectTo:'home', pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'student', component:StudentComponent},
  { path: 'student-dashboard', component:StudentDashboardComponent},
  { path: 'student-profile', component:StudentProfileComponent},
  { path: 's-teacher', component:STeacherComponent},
  { path: 'teacher-dashboard', component:TeacherDashboardComponent},
  { path: 'teacherlist', component:TeacherlistComponent},
  { path: 'studentlist', component:StudentlistComponent},
  { path: 'principal', loadChildren: () => import('./principal/principal.module').then(m => m.PrincipalModule) },
  { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) }, 
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },





  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
