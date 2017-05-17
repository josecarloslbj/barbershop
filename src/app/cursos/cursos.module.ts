import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosRountingModule } from './cursos.routing.module';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    CursosRountingModule
  ],
  declarations: [CursosComponent, CursoDetalheComponent]
})
export class CursosModule { }
