import { CoursesService } from './courses.service';
import { Component } from '@angular/core';


@Component({
  selector: 'courses',
  template: `
  <h2>{{"Title:"}}</h2>
  <ul>
    <li *ngFor="let course of courses">
      {{course}}
    </li>
</ul>
  `
})

export class CoursesComponent{
  title = "List of courses";

  courses;

//Dependency injection, decouples component from the service
  constructor(service: CoursesService){
    this.courses = service.getCourses();
  }
  // logic to call http service, tighlt coupled. Duplicates code if used multiple time. View only
}
