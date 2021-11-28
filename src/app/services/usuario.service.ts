import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetById, PostUsuarioRequest, PutUsuarioRequest, Usuario } from "../models/Usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = "https://localhost:5001/api/v1/Usuario/";

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get<Usuario[]>(`${this.baseUrl}List`);
  }

  create(request: PostUsuarioRequest) : Observable<PostUsuarioRequest>{
    return this.http.post<PostUsuarioRequest>(`${this.baseUrl}Post`, request);
  }

  getById(id: string): Observable<GetById> {
    return this.http.post<GetById>(`${this.baseUrl}GetById`, id);
  }

  updateUsuario(request: PutUsuarioRequest) : Observable<PutUsuarioRequest>{
    return this.http.put<PutUsuarioRequest>(`${this.baseUrl}Put`, request);
  }
}
