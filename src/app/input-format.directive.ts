import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input() appInputFormat;

  constructor(private el:ElementRef) { }

  @HostListener('blur') onBlur(){
    let value:string = this.el.nativeElement.value;

    if(this.appInputFormat == "lowercase"){
      this.el.nativeElement.value = value.toLowerCase();
    }
    if(this.appInputFormat == "uppercase"){
      this.el.nativeElement.value = value.toUpperCase();
    }

    console.log("The value is", this.appInputFormat);
  }



}
