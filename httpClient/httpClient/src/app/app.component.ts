import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Todo {
  complited: boolean;
  title: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((response) => {});
  }
}
