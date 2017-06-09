
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/Http';
import { Usuario } from './../models/Usuario';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class LoginService {
    private baseUrl: string = "http://localhost:50352/api/Cliente";

    constructor(private http: Http) {
        
    }

  public validarLogin(email: string, senha: string): Observable<Usuario> {   

   
      return this.http.get(this.baseUrl + '/validarLogin?senha='+senha+'&login='+email)
            .map(res => res.json());

    }

    public getById(id: number): Observable<Usuario> {

        return this.http.get(this.baseUrl + '/' + id)
            .map(res => res.json());
    }

    public list(): Observable<Usuario[]> {

        return this.http.get(this.baseUrl)
            .map(res => res.json());
    }

    public post(todo: Usuario): Observable<Usuario> {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        return this.http.post(this.baseUrl, JSON.stringify(todo), { headers: headers })
            .map(res => res.json());
    }
    public put(id: number, todo: Usuario): Observable<Usuario> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.baseUrl + '/' + id, JSON.stringify(todo), { headers: headers })
            .map(res => res.json());

    }

    public delete(id: number): Observable<Usuario> {

        return this.http.delete(this.baseUrl + '/' + id)
            .map(res => res.json());
    }
}