import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeptRoutingModule } from './dept-routing.module';
import { DeptComponent } from './dept.component';


@NgModule({
  declarations: [
    DeptComponent
  ],
  imports: [
    CommonModule,
    DeptRoutingModule
  ]
})
export class DeptModule { }
