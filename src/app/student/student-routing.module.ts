import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentComponent } from './student.component';
import { TListComponent } from './t-list/t-list.component';

const routes: Routes = [
  { path: '', component:StudentComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
