import { Directive, ElementRef, HostBinding, HostListener, } from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})

export class dropdownDirective {
  constructor(private elRef: ElementRef) { }
  @HostBinding("class.open") isOpen = false; // "class.open'a" isOpen atanıyor(false, default değeri)

  @HostListener("click") openMenu() {
    this.isOpen = !this.isOpen;
  }

  @HostListener("document:click", ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? this.isOpen : false
  }





}
