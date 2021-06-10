import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // e: number = Math.E;

  // title = 'title';

  search = '';
  searchField = 'title';

  posts: Post[] = [
    { title: 'bber', text: 'be' },
    // { title: 'bber2', text: 'be2' },
    // { title: 'bber3', text: 'be3' },
    // { title: 'bber4', text: 'be4' },
  ];

  // str: string = 'hello world';

  // date: Date = new Date();

  // float = 0.42;

  // obj = {
  //   a: 1,
  //   b: {
  //     c: 2,
  //     d: {
  //       e: 3,
  //       f: 4,
  //     },
  //   },
  // };

  p: Promise<string> = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('promise resolve');
    }, 2000);
  });

  date$: Observable<Date> = new Observable((obs) => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  // @ts-ignore
  date: Date;

  ngOnInit(): void {
    this.date$.subscribe((date) => {
      this.date = date;
    });
  }

  addPost() {
    this.posts.unshift({
      title: 'Angular8',
      text: 'Sergey angular',
    });
  }
}
