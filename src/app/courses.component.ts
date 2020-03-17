import { getTestBed } from '@angular/core/testing';
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

  courses = ["Course 1","Course 2","Course 3"];

  // logic to call http service, tighlt coupled. Duplicates code if used multiple time. View only
}
