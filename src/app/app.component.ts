import { Component } from '@angular/core';

export interface Post {   //Заводим новый интерфейс
  [field: string]: string;
  title: string
  text: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  search = '';
  searchField = 'title';
  posts: Post[] = [
    {title: "Beer", text: "The best beer in the world!"},
    {title: "JavaScript", text: "The best language in the world!"},
    {title: "Angular", text: "Самый лучший фреймворк в мире"},
  ]
}
