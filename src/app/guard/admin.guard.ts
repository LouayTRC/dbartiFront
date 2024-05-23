import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  let response=false
  const authService=inject(AuthService);

  authService.user.subscribe((res) => {
    let user = res
    if (user && user.role=="ADMIN") {
      response=true
    } else {
      response=false
    }
  })
  return response;
};
