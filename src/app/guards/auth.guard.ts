
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './../login/auth.service';
import { Router, RouterModule } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(
    private loginService: AuthService,
    private router: Router
  ) {


  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('auth.guard chamada usuarioEstaAutenticado')

    if (this.loginService.usuarioEstaAutenticado()) {
     
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}


