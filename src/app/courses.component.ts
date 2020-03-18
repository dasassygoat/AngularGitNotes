
import { Component } from '@angular/core';


@Component({
  selector: 'courses',
  template: `

   <!--
   Old way
   <input (keyup)="onKeyup($event)"/> -->

   <!-- new way -->
   <input (keyup.enter)="onKeyup()"/>

 `
})

export class CoursesComponent{
// Old way to implement the feature not using filters
// onKeyup($event){
//   if ($event.keyCode === 13) { console.log("Enter was pressed") }
// }

// new way
onKeyup(){
  console.log("Enter was pressed");
}

}
