import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {MultiplyPipe} from "./pipes/multiply.pipe";
import { ExMarkPipe } from './pipes/ex-mark.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MultiplyPipe,
    ExMarkPipe
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
