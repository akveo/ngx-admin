import {Directive, Component, ElementRef, Renderer} from 'angular2/core';
/*
 * Directive
 * XLarge is a simple directive to show how one is made
 */
@Directive({
  selector: '[x-large]' // using [ ] means selecting attributes
})
export class XLarge {
  constructor(element: ElementRef, renderer: Renderer) {
    // simple DOM manipulation to set font size to x-large
    // `nativeElement` is the direct reference to the DOM element
    // element.nativeElement.style.fontSize = 'x-large';

    // for server/webworker support use the renderer
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
  }
}
