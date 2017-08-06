export class Menu {
    Id: number;
    Category: string;
    Item: MenuItem[];
}

export class MenuItem {
    Id: number;
    MenuId: number;
    Name: string;
    Description: string;
    SizePrice: ItemSizePrice[] = [];
}

export class ItemSizePrice {
    Id: number;
    ItemId: number;
    Size: string;
    Price: number;
}