import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1
  initialTop: number = -15

  constructor(private eleRef: ElementRef) {
    // this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().bottom;
    // console.log(this.initialTop);
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    this.eleRef.nativeElement.style.bottom = (this.initialTop + (window.scrollY * this.parallaxRatio * 0.3)) + 'vh'
  }
}