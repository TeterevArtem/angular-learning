import {
  Component,
  Input,
  OnInit,
  ContentChild,
  ElementRef,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Output, EventEmitter
} from '@angular/core';
import {Post} from "../../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  removePost () {
    this.onRemove.emit(this.post.id)
  }

  @Input() post: Post;
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild("info", {static: true}) inputRef: ElementRef
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log(this.inputRef.nativeElement);
  }
  ngDoCheck(): void {
    console.log('DoCheck');
  }
  ngAfterContentInit(): void {
    console.log("AfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit")
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("OnDestroy")
  }
}
