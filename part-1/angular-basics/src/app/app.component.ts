import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // number = 52;
  // arr = [1, 2, 3];
  // inputValue = '';
  // constructor() {}
  // title = 'initial';
  // toggle = true;

  arr = [1, 1, 2, 3, 5, 8, 13];
  objs = [
    {
      title: 'Post1',
      author: 'Sergey',
      comments: [
        { name: 'max', text: 'lorem1' },
        { name: 'max', text: 'lorem1' },
        { name: 'max', text: 'lorem1' },
      ],
    },
    {
      title: 'Post2',
      author: 'Sergey',
      comments: [
        { name: 'max3', text: 'lorem1' },
        { name: 'max3', text: 'lorem1' },
        { name: 'max3', text: 'lorem1' },
      ],
    },
  ];
  // onInput(event?: KeyboardEvent) {
  //   if (event) this.inputValue = (<HTMLInputElement>event.target).value;
  // }
  // onInput(event: any) {
  //   this.title = event.target.value;
  // }
  // onBlur(str: string) {
  //   this.inputValue = str;
  // }
  // onClick() {
  //   console.log('click');
  // }
}
