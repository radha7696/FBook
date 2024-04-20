import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { RegistrationSubmitService } from '../registration-submit.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { NetworkPageComponent } from '../network-page/network-page.component';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, LoginPageComponent],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {
  constructor(private output: RegistrationSubmitService, private router: Router){

  }
  rcomplete: any
  // registration = new FormGroup({
  //   firstName: new FormControl(),
  //   lastName: new FormControl(),
  //   email: new FormControl(),
  //   password: new FormControl()
  // })

  submit(form: any){
      this.output.register(form.value.firstName, form.value.lastName, form.value.dob, form.value.gender, form.value.email, form.value.password).subscribe(data => console.log(data))
  }
  registerPage(){
    this.router.navigate(['register'])
  }
  loginPage(){
    this.router.navigate(['login'])
  }
}
