import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Post} from "../../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
  removePost () {
    this.onRemove.emit(this.post.id)
  }

  @Input() post: Post;
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild("info", {static: true}) inputRef: ElementRef
  constructor() {
  }
  ngOnInit(): void {
  }
}
