import {FormControl} from "@angular/forms";

export class MyValidator {
  static restrictedEmails (control: FormControl):{[key: string]: boolean} | null{
    if (["test@mail.ru", "admin@gmail.com"].includes(control.value)) {
      return {restrictedEmails: true}
    }
    return null;
  }
}
