
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CursosComponent} from './cursos.component';
import {CursoDetalheComponent} from './curso-detalhe/curso-detalhe.component';

const CURSOS_ROUTES: Routes = [   
    { path: 'cursos', component: CursosComponent }   ,
    { path: 'curso/:id', component: CursoDetalheComponent }   
];


@NgModule({
    imports: [RouterModule.forChild(CURSOS_ROUTES)],
    exports: [RouterModule]
})
export class CursosRountingModule {

}