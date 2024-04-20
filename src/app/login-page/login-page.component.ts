import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LoginAuthService } from '../login-auth.service';
import { response } from 'express';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import "@angular/compiler"
import { RegistrationPageComponent } from '../registration-page/registration-page.component';
import { HomeComponent } from '../home/home.component';
import { NetworkPageComponent } from '../network-page/network-page.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, RegistrationPageComponent, RouterLink, HomeComponent, NetworkPageComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent{
  constructor(public output: LoginAuthService, private router: Router){

  }
  
  users: any
  async submit(form: any){
    // await new Promise(resolve => setTimeout(resolve, 1000));
    this.output.login(form.value.email, form.value.password);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(this.output.name)
    if(this.output.name && this.output.name!=null){
      this.router.navigate(['home'])
    }
    else{
      console.log(this.output.error)
      alert(this.output.error)
    }
    }

authenticate(){
  this.output.checkProfile().subscribe({next: (res:any)=>
    this.router.navigate(['home'])
  , error: (err:any)=>alert(err.error.message)});
}

registerPage(){
  this.router.navigate(['register'])
}
loginPage(){
  this.router.navigate(['login'])
}
}
