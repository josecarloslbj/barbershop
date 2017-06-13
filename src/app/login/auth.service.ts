import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { EfetuarLogin } from './efetuarLogin';


@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;

mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(efetuarLogin: EfetuarLogin) {
    if (efetuarLogin.email === 'josecarloslbj@gmail.com'
      && efetuarLogin.senha === '123456') {

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/usuario']);

    }
    else {

      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado()
  {
    return this.usuarioAutenticado;
  }
}
