import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'random-Angular-app';
  username='';

  loadedfeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedfeature = feature;
  }
}
