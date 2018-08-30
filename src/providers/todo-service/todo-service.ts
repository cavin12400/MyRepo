import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Todo } from '../../models/todo.model';

@Injectable()
export class TodoServiceProvider {
  createDate: number;
  private todo: Todo;
  private todos: Todo[]=[];
  constructor(public storage: Storage) {
  }

  getTodo(createDate:number){
    return this.storage.get('todos').then((todos) =>{
       this.todo = [...todos].find(r=>r.createDate===createDate);
       return this.todo;
    });
  }
  deleteTodo(createDate:number){
    this.todos = this.todos.filter((note)=>{
      return note.createDate !== createDate
    });
    this.storage.set('todos',this.todos);
  }
  editTodo(todo: Todo){
    this.createDate=todo.createDate;
    this.todos = this.todos.filter((note)=>{
      return note.createDate !== this.createDate
    });
    this.storage.set('todos',this.todos);
    

  }
  saveEditTodo(todo:Todo){
    this.todos.push(todo);
    this.storage.set('todos',this.todos);
  }
  saveTodo(todo: Todo){
    todo.createDate = Date.now(); 
    this.todos.push(todo);
    this.storage.set('todos',this.todos);
  }

  
  getAllTodos(){
    return this.storage.get('todos').then(
      (todos) =>{
        this.todos=todos == null ? []: todos;
        return [...this.todos];
      }
    )
  }
}
