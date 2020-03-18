
import { Component } from '@angular/core';


@Component({
  selector: 'courses',
  template: `
<div (click)="onDivClicked">
   <button (click)="onSave($event)">Save</button>
</div>
  `
})

export class CoursesComponent{
onSave($event){
  // Keeps the event from bubbling up
  $event.stopPropagation();
  console.log("Button clicked", $event);
}

onDivClicked(){
  console.log("Div was clicked");
}
}
