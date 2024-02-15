import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers: [MenuService]
})
export class AppComponent {
  // model
  title = 'shopping-cart-app';
  buttonInfo:string = 'button info!';
  count:number = 1;
  name:string = 'Sachin';

  clickListener(evt:Event){
    this.buttonInfo = "Clicked Type " + (evt.target as HTMLInputElement).type
    + " Clicked Value " + (evt.target as HTMLInputElement).value + " and Clicked " + this.count++ + " time(s)!";
  }

  updateEventListener(args:any){
    alert('Event raised by the child component with value ' + args);
    this.name = args; // settting value from profile to app component - child to parent
  }
}
