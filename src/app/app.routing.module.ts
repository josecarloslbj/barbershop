
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {CursosComponent} from './cursos/cursos.component';


const APP_ROUTES: Routes = [
    
    { path: 'login', component: LoginComponent },
    { path: 'contato', component: ContatoComponent},
    // { path: 'cursos', component: CursosComponent },
    { path: '', component: HomeComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}