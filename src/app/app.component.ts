import {Component, OnInit} from '@angular/core'
import {FormGroup, FormControl, Validators, FormArray} from "@angular/forms";

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
      pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl("ru", null),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })
  }
  submit(){
    if (this.form.valid) {
      console.log(this.form)
      const formData = {...this.form.value};
      console.log(formData);
    }
  }
  setCapital(){
    const cityMap:any = {
      ru: "Москва",
      ua: "Киев",
      by: "Минск"
    }
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];
    this.form.patchValue({address:{city}})
  }
  getControls () {
    return (this.form.get('skills') as FormArray).controls
  }
  addSkill(){
    const control = new FormControl('', Validators.required);
    (<FormArray>this.form.get('skills')).push(control)
  }
}

