import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletePostService {
  url="http://3.17.216.66:3000/posts/"
  constructor(private s: HttpClient) { }

  deletePostService(id: any){
    return this.s.delete(this.url+id)
  }
}
