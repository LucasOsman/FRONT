import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Cliente } from "../models/Cliente";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = "https://localhost:5001/api/v1/Cliente/";

  constructor(private http: HttpClient) { }

  list(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseUrl}List`);
  }
}
