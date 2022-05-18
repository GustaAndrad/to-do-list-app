import { Injectable } from '@angular/core';
import { Todolist } from './todolist';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  apiURL : string = 'http://localhost:8080/api/todolist';

  constructor(
    private http: HttpClient
  ) { }

  salvar(todolist : Todolist) : Observable<Todolist>{
    return this.http.post<Todolist>(this.apiURL, todolist)
  }

  listar() : Observable<Todolist[]>{
    return this.http.get<Todolist[]>(this.apiURL);
  }

  deletar(id: number) : Observable<void>{
    const url = `${this.apiURL}/${id}`
    return this.http.delete<void>(url)
  }
}
