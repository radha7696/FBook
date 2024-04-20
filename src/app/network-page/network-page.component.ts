import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { RegistrationPageComponent } from '../registration-page/registration-page.component';
import { LoginAuthService } from '../login-auth.service';
import { PhotosByIdService } from '../photos-by-id.service';
import { DomSanitizer } from '@angular/platform-browser';
import { SendRequestService } from '../send-request.service';

@Component({
  selector: 'app-network-page',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, FormsModule, HomeComponent, LoginPageComponent, RegistrationPageComponent, RouterLink],
  templateUrl: './network-page.component.html',
  styleUrl: './network-page.component.css'
})
export class NetworkPageComponent implements OnInit{
  public users: any
  public unsafeImageUrl: any
  public imageUrl: any
  public photoById: any
  imageToShow: any;
  public j : any
  images: any
  requests: any
  public reqButton = "Send Request"
    constructor(private service: LoginAuthService, private router: Router, private photo: PhotosByIdService, private createReq: SendRequestService){

    }
  async ngOnInit(): Promise<void> {
    this.service.isAuthenticated=true;
    this.service.checkProfile().subscribe({next: (res:any)=> this.users=res})
    // this.photo.getPhoto().subscribe((data:any) => console.log(data.error.error.message))
    // this.photo.getPhoto().subscribe((data:any) => this.photoById=data)
    await new Promise(resolve => setTimeout(resolve, 2000));
    // for(this.j in this.users){
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
  // this.isImageLoading = true;
  this.photo.getPhoto().subscribe({next: (data:any) => {
    this.imageToShow= this.createImageFromBlob(data);
  }, error: err => {
    console.log(err);
  }});
}

  onNetworkClick(){
    this.service.isAuthenticated=true;
    this.router.navigate(['network'])
  }

  onHomeClick(){
    this.service.isAuthenticated=true;
    this.router.navigate(['home'])
  }

  onFriendsClick(){
    this.service.isAuthenticated=true;
    this.router.navigate(['friends'])
  }

  sendReq(userId: any, friendId :any, status: any){
    this.createReq.createRequest(userId, friendId, status).subscribe(data => this.requests=data)
    console.log(this.requests)
    this.reqButton.includes("Send Request")?this.reqButton="Request Pending":this.reqButton="Send Request"
  }
}
