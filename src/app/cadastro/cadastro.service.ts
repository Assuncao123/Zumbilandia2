import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(
      private http: HttpClient
  ) { }

  post(entidade: any) {
    return this.http.get(`http://127.0.0.1:8000/`);
  }
}
