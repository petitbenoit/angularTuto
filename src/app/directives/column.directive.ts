import { 
  Directive, 
  ElementRef, 
  Input, 
  OnChanges, 
  SimpleChanges 
} from '@angular/core';

@Directive({
  selector: '[appColumn]'
})
export class ColumnDirective implements OnChanges {

  @Input() appColumn: number = 12;

  constructor(private eRef:ElementRef) { 
    // this.addClass();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('CHANGES', changes);
   this.addClass();
  }

  addClass() {
    const ele = this.eRef.nativeElement as HTMLElement;
    ele.classList.add(`col-md-${this.appColumn}`);
  }
}
