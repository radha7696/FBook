import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPageComponent } from './login-page/login-page.component';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  url = "http://3.17.216.66:3000/users/authenticate"
  url2 = "http://3.17.216.66:3000/users/"
  public isAuthenticated = false;
  constructor(private service: HttpClient) { 
    
  }
  auth_token: any
  public error: any
  public name: any
  
  isAuthenticatedUser(): boolean {
    if(localStorage.getItem('tk')!=null){
      return true;
    }
    else{
      return false;
    }
  }

  login(email: string, password: string){
    // localStorage.clear();
    return this.service.post(this.url, {'email':email, 'password':password}).subscribe({next: (data:any)=> (localStorage.setItem('tk', data.token), (this.name=data.firstName)), error: (err:any)=> this.error=err.error.message});
    // .subscribe((data:any)=> (localStorage.setItem('tk', data.token)), (err:any)=> (alert(err.error.message))
    // this.checkProfile();
  }

  checkProfile(){
    return this.service.get("http://3.17.216.66:3000/users", {headers:{Authorization: `Bearer ${localStorage.getItem('tk')}`}})
  }

  getFriendsList(id:any){
    return this.service.get("http://3.17.216.66:3000/users/"+id)
  }
}
