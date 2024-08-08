import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[delay]',
  standalone: true,
  inputs: [
    { name: "delay", required: true }
  ]
})
export class DelayDirective implements OnChanges {
  @Input()
  delay: number = 0;
  previousDisplay = 'block';
  timeout: NodeJS.Timeout | null = null;

  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['delay']){
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.hide();
      this.timeout = setTimeout(this.show.bind(this), this.delay);
    }
  }

  show() {
    this.elementRef.nativeElement.style.display = this.previousDisplay;
  }

  hide() {
    this.previousDisplay = this.elementRef.nativeElement.style.display;
    this.elementRef.nativeElement.style.display = 'none';
  }
}
