import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';


const routes: Routes = [
 {
  path:'projects',  
  loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
 },
 { path: 'dept', loadChildren: () => import('./dept/dept.module').then(m => m.DeptModule) },
  {path:'login', component:LoginComponent},
  {path:'forget-password', component:ForgetPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
