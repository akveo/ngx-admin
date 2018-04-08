import { Directive, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDemo]',
  outputs: ['sendMessage'],
})
export class DemoDirective {

  sendMessage = new EventEmitter();

  constructor() { 
    setTimeout(()=>{
      console.log('appDemo','send')
      this.sendMessage.emit();
    },1000);
  }

}
