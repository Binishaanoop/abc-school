import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal.component';
import { TeacherlistComponent } from './teacherlist/teacherlist.component';

const routes: Routes = [{ path: '', component: PrincipalComponent , 
children:[
  { path:'teacherlist', component:TeacherlistComponent }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
