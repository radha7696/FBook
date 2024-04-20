import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { RegistrationSubmitService } from './registration-submit.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NetworkPageComponent } from './network-page/network-page.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistrationPageComponent, LoginPageComponent, HomeComponent, HttpClientModule, NetworkPageComponent, RouterLink, FriendsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(){}
  title = 'FBook';
}
