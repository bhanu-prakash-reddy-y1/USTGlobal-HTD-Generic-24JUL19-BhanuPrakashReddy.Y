import { Directive, ElementRef,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private elementref:ElementRef) {
    elementref.nativeElement.style.background = 'pink';
    elementref.nativeElement.style.color = 'black';
    elementref.nativeElement.style.padding = '60px';
    elementref.nativeElement.style.margintop = '60px';
   }
   @HostBinding('style.background') background:string;
   @HostListener ('mouseenter')
   mouseEnter(){
     this.background  = 'skyblue'
    //  console.log('mouse entered');
    //  this.elementref.nativeElement.style.background='yellow';
    //  this.elementref.nativeElement.style.color='black';
    //  this.elementref.nativeElement.style.fontsize='40px';
  }
  @HostListener ('mouseleave')
  mouseLeave(){
    this.background = 'purple';
    // console.log('mouse entered');
    // this.elementref.nativeElement.style.background='green';
    // this.elementref.nativeElement.style.color='red';
    // this.elementref.nativeElement.style.fontsize='20px';
 }
}

