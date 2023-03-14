import { Component } from '@angular/core';
import {Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent{
  userDetails = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  get username(){return this.userDetails.get('username')}
  get password(){return this.userDetails.get('password')}

  constructor(private userloginservice:UserLoginService, private router:Router){}
  getUserDetails(data:any){
    this.userloginservice.saveUserDetails(this.userDetails.value).subscribe((result)=>{
      console.log("result: ",result);
      // this.getUserDetails.reset({})
    })
    this.router.navigate(['/products']);
  }
}
