import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Usuario } from './../models/usuario';
import { EfetuarLogin } from './efetuarLogin';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

    private usuario: Usuario = new Usuario();
    private efetuarLogin: EfetuarLogin = new EfetuarLogin();

    constructor(private authService: AuthService) { }


    ngOnInit() {

    }

    fazerLogin() {
        console.log(this.efetuarLogin);
       this.authService.fazerLogin(this.efetuarLogin);
    }
}
