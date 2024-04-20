import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LoginAuthService } from '../login-auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NetworkPageComponent } from '../network-page/network-page.component';
import { CreatePostService } from '../create-post.service';
import { FindPostsService } from '../find-posts.service';
import { DeletePostService } from '../delete-post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, NetworkPageComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  users: any
  newPost: any
  error: any
  existingPosts: any
  constructor(public service: LoginAuthService, public router: Router, private post: CreatePostService, private findPosts: FindPostsService, private removePost: DeletePostService){

  }
  ngOnInit(): void {
    this.service.isAuthenticated=true;
    this.findPosts.findPosts('65ffbbfd5a46b61758a42c0b').subscribe(data => this.existingPosts=data)
    console.log(this.existingPosts)
  }

createPost(form: any, userId: any, userName: any, userPhotoId: any, postImageId: any, isActive:any, isAdmin:any, profession:any){
  this.post.createpost(form.value.post, userId, userName, userPhotoId, postImageId, isActive, isAdmin, profession).subscribe({next:data=>this.newPost=data.message, error: err=>this.error=err})
  console.log(this.newPost)
  this.ngOnInit()
}


deletePost(id: any){
this.removePost.deletePostService(id).subscribe(data=>console.log(data))
this.findPosts.findPosts('65ffbbfd5a46b61758a42c0b').subscribe(data => this.existingPosts=data)
    console.log(this.existingPosts)
    this.ngOnInit()
    console.log(this.existingPosts)
}

  myProfile(){
    this.service.checkProfile().subscribe((res:any)=>console.log(res))
    this.service.checkProfile().subscribe({next: (res:any)=> this.users=res})
  }

  onLogoutClick(){
    this.service.isAuthenticated=false;
    this.router.navigate(['register'])
  }

  onFriendsClick(){
    this.service.isAuthenticated=true;
    this.router.navigate(['friends'])
  }

  onNetworkClick(){
    this.service.isAuthenticated=true;
    this.router.navigate(['network'])
  }

  onHomeClick(){
    this.service.isAuthenticated=true;
    this.router.navigate(['home'])
  }
}
