import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './project-routing.module';
import { AddProjectDialogComponent } from './add-project-dialog/add-project-dialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsListComponent,
    AddProjectDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
