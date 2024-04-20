import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendsListService {
  url = "http://3.17.216.66:3000/friends/"
  constructor(private s: HttpClient) { }

  getFriendsList(){
    return this.s.get(this.url)
  }

  getFriendsListWithNames(id: any){
    return this.s.get(this.url+id)
  }
}
