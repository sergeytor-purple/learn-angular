import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  number = 52;
  arr = [1, 2, 3];

  inputValue = '';
  constructor() {}

  title = 'initial';

  backgroundToggle = true;

  // onInput(event?: KeyboardEvent) {
  //   if (event) this.inputValue = (<HTMLInputElement>event.target).value;
  // }

  onInput(event: any) {
    this.title = event.target.value;
  }

  onBlur(str: string) {
    this.inputValue = str;
  }

  onClick() {
    console.log('click');
  }
}
