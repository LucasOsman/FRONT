import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Grupo } from "../models/Grupo";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private baseUrl = "htpp:localhost:5001/api/Equipe/";

  constructor(private http: HttpClient) { }

  list(): Observable<Grupo[]> {
    return this.http.get<Grupo[]>(`${this.baseUrl}List`);
  }
}
