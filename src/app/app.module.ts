import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ProjectsModule } from './projects/projects.module';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
