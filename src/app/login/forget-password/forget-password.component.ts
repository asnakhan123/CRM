import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder , Validators} from '@angular/forms';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgotPasswordForm:FormGroup;	
  constructor(private fb:FormBuilder) { 
    this.forgotPasswordForm = this.fb.group({
  		email : ['',[Validators.required,Validators.email]]
  	})
  }

  ngOnInit(): void {
  }
  forgetPass(value:any){
 console.log(value);
 
  }
}
