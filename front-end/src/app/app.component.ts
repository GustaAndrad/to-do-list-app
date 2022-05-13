import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Todolist } from './todolist';
import { TodolistService } from './todolist.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  form: FormGroup = new FormGroup({
    description : new FormControl('')
  })

  constructor(
    private service : TodolistService
    ){}
  

  submit(){
    console.log(this.form.value)
    const todolist: Todolist = {...this.form.value}
    this.service.salvar(todolist)
    .subscribe( savedTodolist => console.log(savedTodolist ))
  }
}
