import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Todo } from '../../models/todo.model';
import { TodoServiceProvider } from '../../providers/todo-service/todo-service';
import { FormGroup, FormControl } from '@angular/forms';



@IonicPage()
@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html',
})
export class EditTodoPage {
  formGroup: FormGroup;
  todo: Todo;
  date: Date = new Date();
  title: string = '';
  content: string = '';

  private todoEdit: Todo;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private todoService:TodoServiceProvider) {
    this.todoEdit = this.navParams.get('todo');
    this.title= this.todoEdit.title;
    this.date=this.todoEdit.date;
    this.content=this.todoEdit.content;
    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      date: new FormControl(),
    });
  }
  saveTodo(todo: Todo){
    this.todoService.saveEditTodo(todo);
    this.navCtrl.popToRoot();
    
  }
  deleteTodo(createDate:number){
    this.todoService.deleteTodo(createDate);
    
  }
  

}
