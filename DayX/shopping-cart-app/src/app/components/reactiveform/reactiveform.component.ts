import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../utilities/custom-validator';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  regForm:FormGroup;
  minAge:number = 25;
  maxAge:number = 45;

  constructor(private formBuilder:FormBuilder){
    this.regForm = this.formBuilder.group({
      firstname: ['Abhijith',Validators.required],
      lastname: ['',Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(8)
      ])],
      gender: ['',Validators.required],
      age: ['',
      [Validators.required,
      // Provide custom validators for age range
      // CustomValidators.ageRange(this.minAge,this.maxAge)]]
      CustomValidators.ageRange(this.minAge,this.maxAge)]]
    });
  }

  get frm(){return this.regForm.controls;}

  logForm(){
    if(this.regForm.valid){
      alert(JSON.stringify(this.regForm.value));
    }else{
      this.regForm.markAllAsTouched();
      alert('Invalid input given!');
    }
  }

  reset(){
    this.regForm.reset();
  }
}
