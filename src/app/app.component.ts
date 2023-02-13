import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dinamic title';
  img = "https://cdn.cdnlogo.com/logos/r/85/react.svg";
  inputValue = "";

  constructor(){
    setTimeout( () => {
      this.img = "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg";
    }, 5000)
  }

  handleInput(event: Event) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }
}
