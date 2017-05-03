import { Component } from '@angular/core';
 
@Component({
   selector: 'handsontable-section',
   template: `
             <section id="handsontable">
               <div class="row">
                    <div class="col-md-12">
                        <basic-demo></basic-demo>
                        <br>
                        <br>
                        <advanced-demo></advanced-demo>
                        <br>
                        <br>
                        <finance-demo></finance-demo>  
                        <br>
                        <science-demo></science-demo>
                        <br>
                        <br>   
                        <sheet-demo></sheet-demo>
                        <br>
                        <br>
                        <sport-demo></sport-demo>
                    </div>
               </div>
             </section>
             `
})
export class HandsontableSectionComponent {
    currentHeading:string = 'Basic';
 
select(e) {
    if (e.heading) {
     this.currentHeading = e.heading;
    }
 }
}
 
function escape(text: string): string {
  return text.replace(/{/g, '&#123;').replace(/}/g, '&#125;');
}
