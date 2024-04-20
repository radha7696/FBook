import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosByIdService {
  public url = "http://3.17.216.66:3000/files/65ff1aad5a46b61758a42ba2";
  constructor(private s: HttpClient) { }

getPhoto(): Observable<Blob>{
  return this.s.get(this.url, { responseType: 'blob' });
}

}
