import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginAuthService } from '../login-auth.service';


export const authGuard: CanActivateFn = (route, state ) => {
    const router = inject(Router);
    const output = inject(LoginAuthService)

    if((output.name && output.name!=null) || output.isAuthenticated==true ){
      return true;
    }
    else{
      router.navigate(['register'])
    return false;
    }
    
  }


