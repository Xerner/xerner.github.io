import { Directive, ElementRef, Input } from '@angular/core';
import { TabsDirective } from './tabs.directive';

@Directive({
  selector: '[appTabContent]',
  standalone: true,
})
export class TabContentDirective {
  @Input() appTabContent: string = "";
  get name() {
    return this.appTabContent
  }
  display = "";
  constructor(
    private tabs: TabsDirective,
    private elementRef: ElementRef<HTMLElement>
  ) {
  }

  ngOnInit() {
    this.tabs.addContent(this)
  }

  ngOnDestroy() {
    this.tabs.removeContent(this)
  }

  hide() {
    this.display = this.elementRef.nativeElement.style.display;
    this.elementRef.nativeElement.style.display = "none"
  }

  show() {
    this.elementRef.nativeElement.style.display = this.display;
  }
}
