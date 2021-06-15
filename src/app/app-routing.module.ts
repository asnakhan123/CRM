import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
  path:'projects',  
  loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
 },
 { path: 'dept', loadChildren: () => import('./dept/dept.module').then(m => m.DeptModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
