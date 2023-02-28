import {Directive, ElementRef, Renderer2, HostListener, Input, HostBinding, Host} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {
  @Input('appStyle') color:string | any = "blue"
  @Input() dStyles : {border?: string | any, fontWeight?: string | any, borderRadius?: string | any};

  @HostBinding('style.color') elColor = null;
  @HostBinding('style.border') elBorder = null;
  @HostBinding('style.fontWeight') elFontWeight = null;
  @HostBinding('style.borderRadius') elBorderRadius = null;

  constructor(private el: ElementRef, private rendered: Renderer2) {
    //можно использовать первый вариант (это чистый js) но лучше использовать второй вариант
    // el.nativeElement.style.color = "blue";

    this.rendered.setStyle(this.el.nativeElement, 'cursor', 'pointer')
  }
  @HostListener('click', ['$event.target']) onClick(event: Event){
    console.log(event)
  }
  @HostListener('mouseenter') onEnter() {
    // this.rendered.setStyle(this.el.nativeElement, 'color', this.color)
    // this.rendered.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight)
    // this.rendered.setStyle(this.el.nativeElement, 'border', this.dStyles.border)
    // this.rendered.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius)
    this.elColor = this.color;
    this.elBorder = this.dStyles.border;
    this.elFontWeight = this.dStyles.fontWeight;
    this.elBorderRadius = this.dStyles.borderRadius;

  }
  @HostListener('mouseleave') onLeave() {
    this.elColor = null;
    this.elBorder = null;
    this.elFontWeight = null;
    this.elBorderRadius = null;
    // this.rendered.setStyle(this.el.nativeElement, 'color', null)
    // this.rendered.setStyle(this.el.nativeElement, 'fontWeight', null)
    // this.rendered.setStyle(this.el.nativeElement, 'border', null)
    // this.rendered.setStyle(this.el.nativeElement, 'borderRadius', null)
  }

}

