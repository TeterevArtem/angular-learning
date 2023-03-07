import {Component, OnInit} from '@angular/core'
import {FormGroup, FormControl} from "@angular/forms";

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
      email: new FormControl('', null),
      pass: new FormControl('', null)
    })
  }
  submit(){
    console.log(this.form)
    const formData = {...this.form.value};
    console.log(formData);
  }
}

