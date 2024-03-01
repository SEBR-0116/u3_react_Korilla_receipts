const receipts = [
    {
        id: 1,
        person : 'Yanit',
        order : {
        main : 'Taco',
        protien : 'Honey Glazed Chicken',
        rice : 'Cilanro Lime Rice',
        sauce : 'Spicy Honey',
        toppings : ['cilantro', 'jalepeno'],
        drink: 'Pecah Iced tea', 
        cost: 20,
  },
   paid :false, 
},
{
    id : 2,
    person : 'Raphena',
    order : {
        main: 'Burrito Bowl',
        protien : 'Al pastor',
        rice : 'White Rice',
        sauce: 'Salsa Verde',
        toppings: ['pickled radish','ceviche','red pepper flakes'],
        drink : 'Mango Nectar',
        cost: 18,
    },
    paid :false,
},
{
    id : 3,
    person: 'Ibtissam',
    order : {
        main : 'Kimchi Rice Bowl',
        protien : 'Carne Asada',
        rice : 'Fried Rice',
        sauce : 'Siracha',
        toppings: ['cucumber kimchi','Esquites','Guacomole'],
        drink: 'Thai Tea',
        cost:21
    },
    paid : false ,
},
];
export default receipts