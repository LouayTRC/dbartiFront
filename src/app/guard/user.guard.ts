import { Inject, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  let response=false
  const authService=inject(AuthService);

  authService.user.subscribe((res) => {
    let user = res
    if (user && user.role=="USER") {
      response=true
    } else {
      response=false
    }
  })
  return response;
};
