import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[accordion]',
})
export class AccordionDirective {
  @Input() accordion = false;

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.classList.add('block');
    this.elementRef.nativeElement.classList.add('accordion');
    if (this.accordion) {
      this.changeState(this.accordion);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['accordion'] !== undefined) {
      this.changeState(changes['accordion'].currentValue === true)
    }
  }

  changeState(state: boolean) {
    if (state) {
      this.open();
    } else {
      this.close();
    }
  }

  toggle() {
    if (this.elementRef.nativeElement.classList.contains('accordion--open')) {
      this.close();
    } else {
      this.open();
    }
  }

  close() {
    this.elementRef.nativeElement.classList.remove('accordion--open');
    this.accordion = false;
  }

  open() {
    this.elementRef.nativeElement.classList.add('accordion--open');
    this.accordion = true;
  }
}
