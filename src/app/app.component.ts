import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  toggle:any = false;
  array = [3, 5, 8, 13];
  objects = [
    {
      title: "Posts",
      author: "Artem",
      content: [
        {title: "Max", text: "Lorem 1"},
        {title: "Max", text: "Lorem 2"},
        {title: "Max", text: "Lorem 3"}
      ]
    },{
      title: "Posts 2",
      author: "Bladilen",
      content: [
        {title: "Max 2", text: "Lorem 1"},
        {title: "Max 2", text: "Lorem 2"},
        {title: "Max 2", text: "Lorem 3"}
      ]
    }
  ]
}
