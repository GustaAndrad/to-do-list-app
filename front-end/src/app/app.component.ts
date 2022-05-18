import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Todolist } from './todolist';
import { TodolistService } from './todolist.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  todolists : Todolist[] = []
  form: FormGroup = new FormGroup({
    description : new FormControl('')
  })

  constructor(
    private service : TodolistService
    ){}
  
  ngOnInit(){
    this.listarTodos()
  }

  listarTodos(){
    this.service.listar().subscribe(todoList =>{
      this.todolists = todoList
    })
  }

  submit(){
    const todolist: Todolist = {...this.form.value}
    this.service.salvar(todolist)
    .subscribe( savedTodolist => {
      this.todolists.push(savedTodolist)
      this.form.reset()
    })
  }

  delete(todoList : Todolist){
    this.service.deletar(todoList.id).subscribe({
      next: (response) => this.listarTodos()
    })
  }

  done(todoList: Todolist){
    this.service.marcarConcluido(todoList.id).subscribe({
      next: (savedTodolist) =>{
        todoList.done = savedTodolist.done
        todoList.doneDate = savedTodolist.doneDate
      }
    })
  }
}
