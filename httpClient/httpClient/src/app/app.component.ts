import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Todo, TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  todoTitle = '';
  error = '';

  constructor(private TodosService: TodosService) {}

  ngOnInit() {
    this.fetchTodos();
  }

  loading = false;

  addTodo() {
    console.log(this.todoTitle);
    if (!this.todoTitle.trim()) {
      return;
    }

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false,
    };

    this.TodosService.addTodo(newTodo).subscribe((todo) => {
      this.todos.push(todo);
      this.todoTitle = '';
    });
  }

  fetchTodos() {
    this.loading = true;
    this.TodosService.fetchTodos().subscribe(
      (todos) => {
        this.todos = todos;
        this.loading = false;
      },
      (err) => {
        this.error = err.message;
        this.loading = false;
      }
    );
  }

  removeTodo(id: number | undefined) {
    id &&
      this.TodosService.removeTodo(id).subscribe(() => {
        this.todos = this.todos.filter((t) => t.id !== id);
      });
  }

  completeTodo(id: number | undefined) {
    id &&
      this.TodosService.completeTodo(id).subscribe((todo) => {
        this.todos.find((t) => t.id === todo.id)!.completed = true;
      });
  }
}
