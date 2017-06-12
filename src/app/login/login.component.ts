import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { Usuario } from './../models/usuario';

//import { Materialize } from 'angular2-materialize';

declare var $: any;
declare var Materialize: any;


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private usuario: Usuario = new Usuario();
    private currentCliente: Usuario;
    private mostrarFormCadastro: boolean;
    private inEditMode: boolean = false;
    public retorno: boolean;

    modal: any = {
        icon: '<i class="small material-icons">info_outline</i>',
        title: 'Campo obrigatório',
        mensagem: 'Informe o campo obrigatório.',
        fechar: 'Fechar',
        sim: 'Sim',
        nao: 'Não'
    }

    efetuarLogin: any = {
        email: '',
        senha: ''
    }

    constructor(private service: LoginService) {

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
        console.log(this.usuario);

        this.usuario.email = form.value.emailCadastrar;
        if (this.usuario.email == null || this.usuario.email == '') {
            $('.modal').modal('open');
            return;
        }
        else {
            this.mostrarFormCadastro = true;
            this.currentCliente = new Usuario();

            this.currentCliente.email = form.value.emailCadastrar;
            this.currentCliente.nome = 'Teste Novo';
            this.currentCliente.senha = '123anc';


            this.currentCliente.id = 1;
            this.setOrUnsetCompleted(this.currentCliente);
            this.remove(2);


            this.saveNewTodo();
        }
    }

    Cadastrar(form) {
        this.usuario.email = form.value.email_CadastrarConta;
        this.usuario.nome = form.value.nome_CadastrarConta;
        this.usuario.senha = form.value.senha_CadastrarConta;
    }
    VoltarCadastro() {
        this.mostrarFormCadastro = false;
        this.usuario = new Usuario();

        this.currentCliente.id = 1;
        this.setOrUnsetCompleted(this.currentCliente);
        this.remove(2);
    }

    efetuarlogin_click() {
        this.validarLoginUsuario();
    }

    public remove(id: number): void {
        this.service.delete(id)
            .subscribe((res) => {
                if (res) {
                    //this.loadTodos();
                } else {
                    console.error(res);
                }
            });
    }

    public edit(cliente: Usuario): void {
        this.currentCliente = cliente;
        // this.inEditMode = true;
        // this.buttonLabel = 'Salvar';
    }

    public setOrUnsetCompleted(cliente: Usuario): void {

        this.service.put(cliente.id, cliente)
            .subscribe((res) => {
                if (!res) {
                    console.error(res);
                }
            });
    }

    private validarLoginUsuario() {


        this.service.validarLogin(this.efetuarLogin.email, this.efetuarLogin.senha);
       


        // this.service.validarLogin(this.efetuarLogin.email, this.efetuarLogin.senha)
        //     .subscribe((res) => {
        //         if (res) {
        //             this.retorno = true;

        //             this.service.userLogado = true;

        //               console.log('  this.service.userLogado ' + this.service.userLogado);
        //         } else {
        //             this.retorno = false;
        //             this.service.userLogado = false;
        //             console.error('Deu erro');
        //         }
        //     });


        // return true;
    }

    // private loadTodos(): void {
    //     this.usuario =new Usuario();
    //     this.service.list()
    //         .subscribe((res) => {
    //             if (res) {
    //             if (res) {
    //                 this.usuario = res;
    //             } else {
    //                 console.error('Deu erro');
    //             }
    //         });
    // }

    public cancel(): void {
        this.currentCliente = new Usuario();
        // this.inEditMode = false;
    }

    public save(): void {
        if (!this.inEditMode) {
            this.saveNewTodo();
        }
        else {
            this.updateTodo();
        }
    }

    public saveNewTodo(): void {
        this.service.post(this.currentCliente)
            .subscribe((res) => {
                if (res) {
                    // this.usuario.push(res);
                    this.currentCliente = new Usuario();
                    this.inEditMode = false;
                    console.log(res.nome);
                    this.usuario.nome = res.nome;
                    this.usuario.senha = res.senha;

                } else {
                    console.error(res);
                }
            });
    }



    public updateTodo(): void {
        this.service.put(this.currentCliente.id, this.currentCliente)
            .subscribe((res) => {
                if (res) {
                    this.currentCliente = new Usuario();
                    this.inEditMode = false;
                    // this.buttonLabel = 'Criar';
                } else {
                    console.error(res);
                }
            })
    }


    ngOnInit() {
        //  this.loadTodos();
    }

}
