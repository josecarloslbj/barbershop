
import { Component, OnInit } from '@angular/core';

import { LoginService } from './login/login.service';
import { AuthService } from './login/auth.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {

    $(document).ready(function () {
      $(".button-collapse").sideNav();
    })
  }

  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      q => this.mostrarMenu = q
    );
  }
}
