import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'}
  ];
clickTimes = 4;

onAdd() {
    this.courses.push({id:this.clickTimes,name:'course'+ this.clickTimes});
    this.clickTimes++;
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index);
  }

  onChange(course){
    course.name = "UPDATED";
  }
}

