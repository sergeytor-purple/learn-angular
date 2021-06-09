import { Component, OnInit } from '@angular/core';

export type Post = {
  title: string;
  text: string;
  id?: number;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Learn Angular',
      text: 'lorem',
      id: 1,
    },
    // {
    //   title: 'Learn Angular2',
    //   text: 'lorem2',
    //   id: 2,
    // },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      console.log('time');
      this.posts[0].title = 'changed';
    }, 2000);
  }

  updatePosts(post: Post) {
    this.posts.unshift(post);
  }

  removePost(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
}
