import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {PostFormComponent} from "./components/post-form/post-form.component";
import {PostComponent} from "./components/post/post.component";
import { StyleDirective } from './directives/style.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
