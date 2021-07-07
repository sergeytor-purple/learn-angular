import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  defaultColor = "red";
  @Input("appColor") color: string;

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    this.el.nativeElement.style.backgroundColor =
      this.color || this.defaultColor;
  }
}
