import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appShadowEffect]'
})
export class ShadowEffectDirective {
  @HostBinding('class.shadow') isApplied:boolean = false;

  constructor() { }

  @HostListener('mouseenter')
  addShadow() {
    this.isApplied = true;
  }

  @HostListener('mouseleave')
  removeShadow() {
    this.isApplied = false;
  }

}
