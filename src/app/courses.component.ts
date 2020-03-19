
import { Component } from '@angular/core';
// import { NgModel} from '@angular/forms';


@Component({
  selector: 'courses',
  template: `
<!-- not the best method for two way binding -->
   <input [value]="email" (keyup.enter)="email = $event.target.value; onKeyup()"/>
<!-- better way for two way binding useing the two way binding syntax -->
   <input [(ngModel)]="email" (keyup.enter)="onKeyup()"/>

 `
})

export class CoursesComponent{

email = "me@example.com";

onKeyup(){
  console.log(this.email);
}

}
