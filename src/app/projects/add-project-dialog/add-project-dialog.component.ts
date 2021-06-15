import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-project-dialog',
  templateUrl: './add-project-dialog.component.html',
  styleUrls: ['./add-project-dialog.component.scss']
})
export class AddProjectDialogComponent implements OnInit {
  valueText:string="";

  constructor( public dialogRef: MatDialogRef<AddProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  save(){
    this.dialogRef.close(this.valueText);
  }

}
