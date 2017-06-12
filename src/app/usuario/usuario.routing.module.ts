
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { AuthGuard } from './../guards/auth.guard';

const USUARIO_ROUTES: Routes = [
    {
        path: 'usuario', component: UsuarioComponent,
        canActivate:[AuthGuard]
        
    },
];


@NgModule({
    imports: [RouterModule.forChild(USUARIO_ROUTES)],
    exports: [RouterModule]
})
export class UsuarioRountingModule {

}