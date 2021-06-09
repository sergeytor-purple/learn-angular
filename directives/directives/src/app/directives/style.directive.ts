import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  // @ts-ignore
  @Input() dStyles: {
    border?: string;
    fontWeight?: string;
    borderRadius?: string;
  };

  @HostBinding('style.color') elColor: string | null = null;

  constructor(private elRef: ElementRef, private r: Renderer2) {}

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color;
    // this.r.setStyle(this.elRef.nativeElement, 'color', this.color);
    // this.r.setStyle(
    //   this.elRef.nativeElement,
    //   'fontWeight',
    //   this.dStyles.fontWeight
    // );
    // this.r.setStyle(this.elRef.nativeElement, 'border', this.dStyles.border);
    // this.r.setStyle(
    //   this.elRef.nativeElement,
    //   'borderRadius',
    //   this.dStyles.borderRadius
    // );
  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = null;
    // this.r.setStyle(this.elRef.nativeElement, 'color', null);
    // this.r.setStyle(this.elRef.nativeElement, 'fontWeight', null);
  }
}
