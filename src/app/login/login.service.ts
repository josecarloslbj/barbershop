
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

    public getById(id: number): Observable<Cliente> {

        return this.http.get(this.baseUrl + '/' + id)
            .map(res => res.json());
    }

    public list(): Observable<Cliente[]> {

        return this.http.get(this.baseUrl)
            .map(res => res.json());
    }

    public post(todo: Cliente): Observable<Cliente> {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        return this.http.post(this.baseUrl, JSON.stringify(todo), { headers: headers })
            .map(res => res.json());
    }
    public put(id: number, todo: Cliente): Observable<Cliente> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + '/' + id, JSON.stringify(todo), { headers: headers })
            .map(res => res.json());

    }

    public delete(id: number): Observable<Cliente> {

        return this.http.delete(this.baseUrl + '/' + id)
            .map(res => res.json());
    }
}