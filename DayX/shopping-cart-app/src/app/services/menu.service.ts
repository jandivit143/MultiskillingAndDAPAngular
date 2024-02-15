import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // providing information about the servie at root level
})
export class MenuService {
  menuItems:string[];
  constructor() {
    this.menuItems = ['Login', 'Greet', 'Products', 'CartDetails', 'Profile', 'LifeCycleHooks', 'SignupForm',
                      'ReactiveForm', 'DemoPipes', 'Users'];
  }
}
