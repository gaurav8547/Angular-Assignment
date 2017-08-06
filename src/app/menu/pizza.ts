import { MenuItem } from './menu';

export const Pizza: MenuItem[] = [{
    Id: 1,
    MenuId: 1,
    Name: 'Margherita',
    Description: 'Tomato, Cheese and Oregano',
    SizePrice: [
        {
            Id: 1,
            ItemId: 1,
            Size: 'Small',
            Price: 7
        },
        {
            Id: 1,
            ItemId: 1,
            Size: 'Medium',
            Price: 9
        },
        {
            Id: 1,
            ItemId: 1,
            Size: 'Large',
            Price: 11
        },
        {
            Id: 1,
            ItemId: 1,
            Size: 'Large',
            Price: 13
        }
    ]
},
{
    Id: 2,
    MenuId: 1,
    Name: 'Four Corners',
    Description: 'Your Choice of Toppings',
    SizePrice: [
        {
            Id: 1,
            ItemId: 2,
            Size: 'Small',
            Price: 9
        },
        {
            Id: 1,
            ItemId: 2,
            Size: 'Medium',
            Price: 11
        },
        {
            Id: 1,
            ItemId: 2,
            Size: 'Large',
            Price: 13
        },
        {
            Id: 1,
            ItemId: 2,
            Size: 'Large',
            Price: 13
        }
    ]
},
{
    Id: 3,
    MenuId: 1,
    Name: 'Plain',
    Description: 'Tomato Cheese and Ham',
    SizePrice: [
        {
            Id: 1,
            ItemId: 2,
            Size: 'Small',
            Price: 8
        },
        {
            Id: 1,
            ItemId: 2,
            Size: 'Medium',
            Price: 10
        },
        {
            Id: 1,
            ItemId: 2,
            Size: 'Large',
            Price: 13
        },
        {
            Id: 1,
            ItemId: 2,
            Size: 'Large',
            Price: 13
        }
    ]
},
{
    Id: 4,
    MenuId: 1,
    Name: 'BBQ Chiken',
    Description: 'BBQ Sausce, Cheese and Chiken',
    SizePrice: [
        {
            Id: 1,
            ItemId: 2,
            Size: 'Small',
            Price: 8.50
        },
        {
            Id: 1,
            ItemId: 2,
            Size: 'Medium',
            Price: 10.50
        },
        {
            Id: 1,
            ItemId: 2,
            Size: 'Large',
            Price: 14
        },
        {
            Id: 1,
            ItemId: 2,
            Size: 'Large',
            Price: 16
        }
    ]
}]