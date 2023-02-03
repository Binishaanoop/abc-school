import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    PrincipalComponent,
    StudentlistComponent,
    TeacherlistComponent,
   
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    FormsModule,
  
  ]
})
export class PrincipalModule { }
