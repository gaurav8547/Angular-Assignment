import { Injectable } from '@angular/core';
import { Menu, MenuItem } from './menu';
import { Pizza } from './pizza';

@Injectable()
export class MenuService {

    //Method to get menu data
    getMenuData(): Menu[] {
        let menu: Menu[] = [];
        menu.push(this.getPizzaMenu());
        // menu.push(this.getPastaMenu());
        return menu;
    }

    getPizzaMenu(): Menu {
        let menu = new Menu();

        menu.Id = 1;
        menu.Category = "Pizza";
        menu.Item = Pizza;
        
        return menu;
    }

    getPastaMenu(): Menu {
        let menu = new Menu();

        menu.Id = 2;
        menu.Category = "Pasta";
        //Get Past Items
        return menu;
    }
}