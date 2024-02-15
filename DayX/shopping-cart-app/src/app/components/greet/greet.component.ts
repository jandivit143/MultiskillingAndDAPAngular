import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrl: './greet.component.css'
})
export class GreetComponent {
  greetMsg:string; // source
  isDisabled:boolean;
  constructor(){
    this.greetMsg = 'Welcome to Zensar!';
    this.isDisabled = false;
  }
}
