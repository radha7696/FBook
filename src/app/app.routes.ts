import { Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';
import { NetworkPageComponent } from './network-page/network-page.component';
import { FriendsPageComponent } from './friends-page/friends-page.component';

export const routes: Routes = [{
    path:'register', component:RegistrationPageComponent},
    {path:'', redirectTo: 'register', pathMatch: 'full' },
    {path:'login', component:LoginPageComponent},
    {path:'home', component:HomeComponent, canActivate : [authGuard]},
     
    {path:'network', component:NetworkPageComponent, canActivate : [authGuard]},
    {path:'friends', component:FriendsPageComponent, canActivate : [authGuard]},
];

