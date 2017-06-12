
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './../login/login.service';
import { Router, RouterModule } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(
    private loginService: LoginService,
    private router: Router
  ) {


  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('auth.guard chamada usuarioEstaAutenticado')

    if (this.loginService.usuarioEstaAutenticado()) {
      console.log('auth.guard chamada usuarioEstaAutenticado retorno true')
      return true;
    }

    this.router.navigate(['/login']);

    console.log('auth.guard chamada usuarioEstaAutenticado retorno false')
    return false;
  }
}


