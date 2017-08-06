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
        menu.Item = this.getPizzMenuItems(menu.Id);

        return menu;
    }

    getPizzMenuItems(menuId: number): MenuItem[] {
        let pizzaItems: MenuItem[] = [];

        let index:  number = 0;
        for(let pizzaItem of Pizza) {
            pizzaItems.push(pizzaItem);
            index++;
        }

        return pizzaItems;
    }

    getPastaMenu(): Menu {
        let menu = new Menu();

        menu.Id = 2;
        menu.Category = "Pasta";
        //Get Past Items
        return menu;
    }
}