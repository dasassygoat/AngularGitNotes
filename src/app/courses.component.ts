
import { Component } from '@angular/core';


@Component({
  selector: 'courses',
  template: `
  <h2>{{title}}</h2>
  <h2 [textContent]="title"></h2>

  <img src="{{imageUrl}}"> <!-- this is syntatical sugar for the next lin -->
  <img [src]="imageUrl" /> <!-- property binding only works one way here -->

  `
})

export class CoursesComponent{
  title = "List of courses";

  imageUrl = "http://lorempixel.com/400/200";
}
