import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';
import { Todo } from '../../models/todo.model';
import { FormGroup,FormControl } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
})
export class AddTodoPage {
  formGroup: FormGroup;
  todo: Todo;
  date: Date = new Date();
  title: string = '';
  content: string = '';

  constructor(public navCtrl: NavController, private todoService: TodoServiceProvider) {
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl(),
    });
  }

  saveTodo(todo: Todo){
    this.todoService.saveTodo(todo);
    this.navCtrl.pop();
  }

}
