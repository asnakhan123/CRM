import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsComponent } from './projects.component';




@NgModule({
  declarations: [
    ProjectsComponent,
    AddProjectComponent,
    EditProjectComponent,
    ProjectsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
