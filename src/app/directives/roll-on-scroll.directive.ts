import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[rollOnScroll]'
})
export class RollOnScrollDirective {

  @HostListener('window:scroll', []) onWindowScroll() {
    const rotation = `translateY(-50%) rotateZ(${window.scrollY / 25}deg)`;

    this.render.setStyle(
      this.elementRef.nativeElement,
      'transform',
      rotation
    )
  }

  constructor(
    private elementRef: ElementRef,
    private render: Renderer2
  ) { }

}
