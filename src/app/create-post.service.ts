import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatePostService {
  url="http://3.17.216.66:3000/posts/createpost"
  constructor(private s: HttpClient) { }

  createpost(post: any, userId: any, userName: any, userPhotoId: any, postImageId: any, isActive:any, isAdmin:any, profession:any){
    return this.s.post<any>(this.url, {'post':post, 'userId':userId, 'userName':userName, 'userPhotoId':userPhotoId, 'postImageId':postImageId, 'isActive':isActive, 'isAdmin':isAdmin, 'profession':profession})
  }
}
