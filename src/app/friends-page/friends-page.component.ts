import { Component, OnInit } from '@angular/core';
import { FriendsListService } from '../friends-list.service';
import { PhotosByIdService } from '../photos-by-id.service';
import { LoginAuthService } from '../login-auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { NetworkPageComponent } from '../network-page/network-page.component';

@Component({
  selector: 'app-friends-page',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, CommonModule, HomeComponent, NetworkPageComponent],
  templateUrl: './friends-page.component.html',
  styleUrl: './friends-page.component.css'
})
export class FriendsPageComponent implements OnInit{
  stack: any
  friends: any
  imageToShow: any
  friendsURL: any
  friendsList: any
  i : any
  j : any
  error: any
  constructor(private service: FriendsListService, private photo: PhotosByIdService, private login: LoginAuthService, private router: Router){}
  async ngOnInit(): Promise<void> {
    this.service.getFriendsListWithNames('65ffbbfd5a46b61758a42c0b').subscribe({next:data => this.friends=data, error:err=>this.error=err.statusText})
    await new Promise(resolve => setTimeout(resolve, 2000));
    if(this.friends){
    for(this.j in this.friends){
      this.login.getFriendsList(this.friends[this.j].friendId).subscribe({next: data => this.friendsList=data, error:err=>this.error=err.statusText})
      console.log(this.error)
      console.log(this.friends[this.j].friendId)
      console.log(this.friendsList)
      this.stack.push(this.friendsList)
    }}
    else{
        console.log(this.error)
    }
    this.photo.getPhoto().subscribe({next: (data:any) => {
      this.imageToShow= this.createImageFromBlob(data);
    }, error: (err:any) => {
      console.log(err);
    }});
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);
  
    if (image) {
       reader.readAsDataURL(image);
    }
  }
  
  getImageFromService() {
    this.photo.getPhoto().subscribe({next: (data:any) => {
      this.imageToShow= this.createImageFromBlob(data);
    }, error: err => {
      console.log(err);
    }});
  }
  onNetworkClick(){
    this.login.isAuthenticated=true;
    this.router.navigate(['network'])
  }

  onHomeClick(){
    this.login.isAuthenticated=true;
    this.router.navigate(['home'])
  }

  onLogoutClick(){
    this.login.isAuthenticated=false;
    this.router.navigate(['register'])
  }

  onFriendsClick(){
    this.login.isAuthenticated=true;
    this.router.navigate(['friends'])
  }

}
