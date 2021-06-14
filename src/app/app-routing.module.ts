import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'projects', component:ProjectsComponent},
  {path:'login', component:LoginComponent},
  {path:'forget-password', component:ForgetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
