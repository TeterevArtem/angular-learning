import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd:EventEmitter<Post> = new EventEmitter<Post>();
  //данная строка позволяет через декоратор @Output вывести данные из компонента в родителя
  //EventEmitter - это тип класса который позволяет отправить данные наверх

  title = "";
  text = "";

  ngOnInit() {

  }

  addPost(){
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post);
      this.title = this.text = "";
    }
  }
}
