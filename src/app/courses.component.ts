
import { Component } from '@angular/core';
// import { NgModel} from '@angular/forms';


@Component({
  selector: 'courses',
  template: `
{{course.title | uppercase | lowercase}}<br/>
{{course.rating | number:'1.2-2'}}<br/> <!-- would round as needed -->
{{course.students | number}}<br/>
{{course.price | currency:'AUD':true:'3.2-2'}}<br/>
{{course.releaseDate | date:'shortDate'}}

 `
})

export class CoursesComponent{

  course = {
    title:"The complete angular course",
    rating: 4.9745,
    students: 30123,
    price:1990.95,
    releaseDate: new Date(2016, 3, 1)
  };

}
