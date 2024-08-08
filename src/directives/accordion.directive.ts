import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[accordion]',
})
export class AccordionDirective {
  @Input() accordion = false;
  @Input() isAccordionHorizontal = false;

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.classList.add(this.getAccordionClass());
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
    if (this.elementRef.nativeElement.classList.contains(this.getAccordionOpenClass())) {
      this.close();
    } else {
      this.open();
    }
  }

  close() {
    this.elementRef.nativeElement.classList.remove(this.getAccordionOpenClass());
    this.accordion = false;
  }

  open() {
    this.elementRef.nativeElement.classList.add(this.getAccordionOpenClass());
    this.accordion = true;
  }

  getAccordionClass() {
    if (this.isAccordionHorizontal) {
      return "accordion-horizontal";
    }
    return "accordion"
  }

  getAccordionOpenClass() {
    if (this.isAccordionHorizontal) {
      return "accordion-horizontal--open";
    }
    return "accordion--open"
  }
}
