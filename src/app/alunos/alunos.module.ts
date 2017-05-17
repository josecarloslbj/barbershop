
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

import { AlunosRountingModule } from './alunos.routing.module';
@NgModule({
    imports: [
        CommonModule,
        AlunosRountingModule
    ],
    exports: [],
    declarations: [
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent],
    providers: []
})


export class AlunosModule {

}