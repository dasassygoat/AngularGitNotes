import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
  title: 'secondTry',
  isFavorite: true
  };

  // one way is the inline annotate the type, i.e isFavorite: {newValue:boolean} or...
  onFavoriteChanged(isFavorite: FavoriteChangedEventArgs){
    console.log("Favorite Changed", isFavorite.newValue);
  }
}
//could also create an interface
interface FavoriteChangedEventArgs{
  newValue:boolean
}
