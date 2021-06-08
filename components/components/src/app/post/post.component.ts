import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Post } from '../app.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // @ts-ignore
  @Input() post: Post;

  @Output() onRemove = new EventEmitter<number>();

  // @ts-ignore
  @ContentChild('info', { static: true }) infoRef: ElementRef;

  constructor() {
    console.log('contructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');

    // console.log(this.infoRef.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('doCheck');
  }

  ngAfterContentInit(): void {
    console.log('afterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('viewInot');
  }

  ngAfterViewChecked(): void {
    console.log('viewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  removePost() {
    this.onRemove.emit(this.post.id);
  }
}
