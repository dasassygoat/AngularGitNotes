
import { Component } from '@angular/core';


@Component({
  selector: 'courses',
  template: `
  <img [src]="imageUrl"/>
   <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button> <!-- dom style object prop -->
  `
})

export class CoursesComponent{
  colspan = 10;
isActive = false;
  imageUrl = "http://lorempixel.com/400/200";
}
