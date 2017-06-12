
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioComponent } from './usuario.component';
import { UsuarioRountingModule } from './usuario.routing.module';


@NgModule({
  imports: [
    CommonModule,
    UsuarioRountingModule
  ],
  declarations: [UsuarioComponent]
})
export class UsuarioModule { }
