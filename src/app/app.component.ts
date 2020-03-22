import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses;


  loadCourses(){
this.courses = [
  {id:1,name:'course1'},
  {id:2,name:'course2'},
  {id:3,name:'course3'}
];
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }
}

