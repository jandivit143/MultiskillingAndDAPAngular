import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  // providers: [MenuService] // providing information about MenuService at MenuComponent
})
export class MenuComponent {
  menuItems:string[];
  // Injecting the MenuService 
  constructor(private menuService: MenuService){
    // this.menuItems = ['Login', 'Products', 'Cart Details', 'Mobiles'];
    this.menuItems = this.menuService.menuItems;
  }
}
