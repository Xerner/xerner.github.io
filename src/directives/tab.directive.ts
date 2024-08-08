import { Directive, ElementRef, Input, signal } from '@angular/core';
import { TabsDirective } from './tabs.directive';

@Directive({
  selector: '[appTab]',
  standalone: true,
})
export class TabDirective {
  @Input({ required: true }) appTab!: string;
  get name() {
    return this.appTab
  }
  isActive = signal<boolean>(false);

  constructor(
    private tabs: TabsDirective,
    private elementRef: ElementRef<HTMLElement>
  ) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.addEventListener('click', this.onClick.bind(this))
    this.tabs.add(this);
  }

  ngOnDestroy(): void {
    this.tabs.remove(this);
  }

  onClick() {
    this.tabs.setActiveTab(this.appTab);
  }

  show() {
    this.isActive.set(true);
    this.elementRef.nativeElement.classList.add('active');
  }

  hide() {
    this.elementRef.nativeElement.classList.remove('active');
  }
}
