import {FormControl, AbstractControl} from "@angular/forms";
import {Observable} from "rxjs";

interface ControlData {
  [key: string]: boolean | null
}

export class MyValidator {
  static restrictedEmails (control: FormControl): ControlData {
    if (["test@mail.ru", "admin@gmail.com"].includes(control.value)) {
      return {restrictedEmails: true}
    }
    return null;
  }
  static uniqEmail (control: AbstractControl) : Promise<ControlData> | Observable<ControlData> | null {
    return new Promise(resolve => {
      setTimeout(() => {
        if(control.value === "async@mail.ru") {
          resolve({uniqEmail: true})
        } else {
          resolve(null)
        }
      },1000)
    })
  }
}
