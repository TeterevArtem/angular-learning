import {Component, OnInit} from '@angular/core'
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(){

  }
  form: FormGroup

  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  submit(){
    if (this.form.valid) {
      console.log(this.form)
      const formData = {...this.form.value};
      console.log(formData);
    }
  }
}

