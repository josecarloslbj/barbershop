import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import { Materialize } from 'angular2-materialize';

declare var $: any;
declare var Materialize: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private mostrarFormCadastro: boolean;
  usuario: any = {
    email: '',
    nome: '',
    senha: ''
  }


  modal: any = {
    icon: '<i class="small material-icons">info_outline</i>',
    title: 'Campo obrigatório',
    mensagem: 'Informe o campo obrigatório.',
    fechar: 'Fechar',
    sim: 'Sim',
    nao: 'Não'
  }

  constructor() {
    this.mostrarFormCadastro = false;

    $(document).ready(function () {
      Materialize.updateTextFields();
      $('.modal').modal();
    });
  }


  submitformLogin(form) {
    console.log(form);
  }

  submitformLoginCadastrar(form) {

    this.usuario.email = form.value.emailCadastrar;
    if (this.usuario.email == null || this.usuario.email == '') {
      $('.modal').modal('open');
      return;
    }
    else
      this.mostrarFormCadastro = true;
  }

  Cadastrar(form) {
    this.usuario.email = form.value.email_CadastrarConta;
    this.usuario.nome = form.value.nome_CadastrarConta;
    this.usuario.senha = form.value.senha_CadastrarConta;
  }
  VoltarCadastro() {
    this.mostrarFormCadastro = false;
    this.usuario= new this.usuario();
  }
  ngOnInit() {
  }

}
