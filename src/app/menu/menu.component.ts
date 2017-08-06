import { Component } from '@angular/core';
import { MenuService } from "./menu.service";

@Component({
  selector: 'menu-component',
  templateUrl: './menu.component.html',
  providers: [MenuService]
})
export class MenuComponent {
 constructor(private menuService: MenuService) {
     this.menu = this.menuService.getMenuData();
  }

 menu: any [];
 

}
