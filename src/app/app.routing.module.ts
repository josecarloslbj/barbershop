

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {CursosComponent} from './cursos/cursos.component';

import { AuthGuard } from './guards/auth.guard';
const APP_ROUTES: Routes = [
    
    { path: 'login', component: LoginComponent  },
    { path: 'contato', component: ContatoComponent  
     //,canActivate:[AuthGuard]
    },
    // { path: 'cursos', component: CursosComponent },
    { path: '', component: HomeComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}