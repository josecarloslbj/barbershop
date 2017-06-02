
import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { Cliente } from './../models/cliente';

//import { Materialize } from 'angular2-materialize';

declare var $: any;
declare var Materialize: any;


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public clientes: Cliente[] = [];
    public inEditMode: boolean = false;
    public currentCliente: Cliente;

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
        console.log(this.clientes);

        this.usuario.email = form.value.emailCadastrar;
        if (this.usuario.email == null || this.usuario.email == '') {
            $('.modal').modal('open');
            return;
        }
        else {
            this.mostrarFormCadastro = true;
            this.currentCliente = new Cliente();

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
        this.usuario = new this.usuario();

        this.currentCliente.id = 1;
        this.setOrUnsetCompleted(this.currentCliente);
        this.remove(2);
    }

    public remove(id: number): void {
        this.service.delete(id)
            .subscribe((res) => {
                if (res) {
                    this.loadTodos();
                } else {
                    console.error(res);
                }
            });
    }

    public edit(cliente: Cliente): void {
        this.currentCliente = cliente;
        // this.inEditMode = true;
        // this.buttonLabel = 'Salvar';
    }

    public setOrUnsetCompleted(cliente: Cliente): void {

        this.service.put(cliente.id, cliente)
            .subscribe((res) => {
                if (!res) {
                    console.error(res);
                }
            });
    }

    private loadTodos(): void {
        this.clientes = [];
        this.service.list()
            .subscribe((res) => {
                if (res) {
                    this.clientes = res;
                } else {
                    console.error('Deu erro');
                }
            });
    }
    public cancel(): void {
        this.currentCliente = new Cliente();
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
                    this.clientes.push(res);
                    this.currentCliente = new Cliente();
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
                    this.currentCliente = new Cliente();
                    this.inEditMode = false;
                    // this.buttonLabel = 'Criar';
                } else {
                    console.error(res);
                }
            })
    }


    ngOnInit() {

        this.loadTodos();


    }

}
