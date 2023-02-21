import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: "Хочу выучить Angular компоненты", text: "Я Все еще учу компоненты", id: 1},
    {title: "Хочу выучить Angular пайпы", text: "Я Все еще учу пайпы", id: 2},
    {title: "Хочу выучить Angular директивы", text: "Я Все еще учу директивы", id: 3},
  ]

  updatePosts (post: Post) {
    this.posts.unshift(post)
  } 
}
