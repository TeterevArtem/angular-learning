import { Component } from '@angular/core';
import {LocalService} from "../services/local.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [LocalService]
})
export class CounterComponent {
  constructor(public localCounter: LocalService){

  }
}
