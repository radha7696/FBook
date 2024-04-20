import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendRequestService {
  url = "http://3.17.216.66:3000/friends/createrequest"
  constructor(private s : HttpClient) { }

  createRequest(userId: any, friendId: any, status: any){
    return this.s.post(this.url, {'userId':userId, 'friendId':friendId, 'status':status})
  }
}
