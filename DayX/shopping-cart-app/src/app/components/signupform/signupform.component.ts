import { Component } from '@angular/core';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrl: './signupform.component.css'
})
export class SignupformComponent {
  user = {
    name:'Sachin',
    phone:9876543210,
    address:'India',
    email:'Sachin@cricket.com'
  }

  postForm(formData:any){
    alert('Form Sbumitted! ' + JSON.stringify(formData));
  }

  setValues(){
    this.user.name = 'Rahul';
    this.user.phone = 9983241123;
    this.user.address = 'Dubai';
    this.user.email = 'Rahul@cricket.com';
  }
}
