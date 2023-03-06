import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable({
  providedIn: 'root'
})

export class AppCounterService {
  constructor(public logService: LogService){

  }
  counter = 0;
  increase() {
    this.counter++;
    this.logService.log('increase...')
  }
  decrease() {
    this.counter--;
    this.logService.log('decrease...')
  }
}
