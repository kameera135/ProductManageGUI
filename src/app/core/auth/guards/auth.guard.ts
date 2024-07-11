import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async (route, state) => {

  const tokenService = inject(TokenService);
  const router = inject(Router);

  const isAuthenticated = tokenService.isAuthenticated();

  if (!isAuthenticated) {
    router.navigate(['']);
    return false;
  }
  
  return true;
};
