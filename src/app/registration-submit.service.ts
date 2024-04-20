import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationSubmitService implements OnInit{
  url = "http://3.17.216.66:3000/users/register";
  constructor(private service: HttpClient) { }
  ngOnInit(): void {
    
  }

  register(firstName: string, lastName: string, dob: Date, gender: string, email: string, password: string){
    return this.service.post<any>(this.url, {'firstName': firstName, 'lastName': lastName, 'dob': dob, 'gender': gender, 'email': email, 'password': password});
    
  }
}
