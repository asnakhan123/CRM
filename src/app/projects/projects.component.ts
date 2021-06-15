import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddProjectDialogComponent } from "./add-project-dialog/add-project-dialog.component";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  animal: string='nikita';
  name: string='';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog():void {
    const dialogRef = this.dialog.open(AddProjectDialogComponent,{
      width: '500px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });

    
  }

}
