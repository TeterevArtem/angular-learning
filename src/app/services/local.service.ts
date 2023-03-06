import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable()
export class LocalService {
  constructor(public logService: LogService) {

  }
  counter = 0;
  increase() {
    this.logService.log('local increase...')
    this.counter++;
  }
  decrease() {
    this.logService.log('local decrease...')
    this.counter--;
  }
}
