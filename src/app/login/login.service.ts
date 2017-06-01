
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/Http';
import { Cliente } from './../models/cliente';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class LoginService {
    private baseUrl: string = "http://localhost:50352/api/cliente";

    constructor(private http: Http) {
    }

    // public getById(id: number): Observable<Cliente> {

    //     return this.http.get(this.baseUrl + '/' + id)
    //         .map(res => res.json());
    // }

    public list(): Observable<Cliente[]> {

        return this.http.get(this.baseUrl)
            .map(res => res.json());
    }

  

}