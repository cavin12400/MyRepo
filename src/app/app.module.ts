import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddTodoPage } from '../pages/add-todo/add-todo';
import { TodoServiceProvider } from '../providers/todo-service/todo-service';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewTodoPage } from '../pages/view-todo/view-todo';
import { EditTodoPage } from '../pages/edit-todo/edit-todo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddTodoPage,
    ViewTodoPage,
    EditTodoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddTodoPage,
    ViewTodoPage,
    EditTodoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoServiceProvider
  ]
})
export class AppModule {}
