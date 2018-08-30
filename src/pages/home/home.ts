import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddTodoPage } from '../add-todo/add-todo';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';
import { Todo } from '../../models/todo.model';
import { ViewTodoPage } from '../view-todo/view-todo';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private todos: Promise<Todo[]>;
  private todo: Todo;
  constructor(public navCtrl: NavController, private todoService: TodoServiceProvider) {

  }
  splash = true;
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }
  ionViewWillEnter(){
    this.todos= this.getAllTodos();
  }
  addTodo(){
    this.navCtrl.push(AddTodoPage);
  }

  getTodo(createDate:number){
    this.todoService.getTodo(createDate).then((n)=>{
      this.todo=n;
      this.navCtrl.push(ViewTodoPage, {todo: this.todo})
    })
  }
  getAllTodos(){
    return this.todoService.getAllTodos();
  }
}
