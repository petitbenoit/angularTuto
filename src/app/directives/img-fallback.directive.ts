import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgFallback]'
})
export class ImgFallbackDirective {
  // <img src="image.jpg" appImgFallback />
  // <img src="image.jpg" appImgFallback="image_path" />
  // <img src="image.jpg" [appImgFallback]="image_variable" />

  // [] : expect a right hand side = [] = "something" 
  // [] : evaluate the right hand size => [] = "variable"
  @Input() appImgFallback!: string;
  constructor(private eRef: ElementRef) { }

  @HostListener('error')
  changeToDefault() {
    const imgEle = this.eRef.nativeElement as HTMLImageElement;
    imgEle.src = this.appImgFallback || '/assets/default.jpg';
  }
}
