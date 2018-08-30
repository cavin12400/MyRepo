import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';
import { Todo } from '../../models/todo.model';
import { EditTodoPage } from '../edit-todo/edit-todo';

@IonicPage()
@Component({
  selector: 'page-view-todo',
  templateUrl: 'view-todo.html',
})
export class ViewTodoPage {
  private todo: Todo;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private todoService:TodoServiceProvider) {
      this.todo = this.navParams.get('todo');
  }
  editTodo(createDate:number){
    this.todoService.getTodo(createDate).then((n)=>{
      this.todo=n;
      this.navCtrl.push(EditTodoPage, {todo: this.todo})
    })
  }
  deleteTodo(createDate:number){
    this.todoService.deleteTodo(createDate);
    this.navCtrl.pop();
  }

}
