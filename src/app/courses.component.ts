
import { Component } from '@angular/core';


@Component({
  selector: 'courses',
  template: `

   <input #email (keyup.enter)="onKeyup(email.value)"/>

 `
})

export class CoursesComponent{

onKeyup(email){
  console.log(email);
}

}
