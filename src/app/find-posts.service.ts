import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindPostsService {
url="http://3.17.216.66:3000/posts/findpostbyuserid"
  constructor(private s: HttpClient) { }

  findPosts(id: any){
    return this.s.post(this.url, {'id': id})
  }
}
