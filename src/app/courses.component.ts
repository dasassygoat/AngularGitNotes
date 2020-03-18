
import { Component } from '@angular/core';


@Component({
  selector: 'courses',
  template: `
  <img [src]="imageUrl"/>
  <button class="btn btn-primary" [class.active]="isActive">Save</button>
  `
})

export class CoursesComponent{
  colspan = 10;
isActive = true;
  imageUrl = "http://lorempixel.com/400/200";
}
