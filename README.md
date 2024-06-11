### SEBR 0429

# Korilla React Receipts

![koreanTacos](https://www.foodnetwork.com/content/dam/images/food/fullset/2014/4/16/0/DV1906H_Korean-Bulgogi-Taco-Recipe_s4x3.jpg)



Korilla is a Korean barbecue taco truck that makes thousands of hungry customers
happy every year.

Their CEO is thinking of updating their short order tracking system using React.

Build a prototype of this short order receipts tracker.

## Prerequisites

- React

## Instructions

1. Fork and clone this repository.
1. Create a new React App
1. Fulfill the listed requirements.
1. Add, Commit, and Push to Github

## Requirements

Follow the walkthrough and finish all parts. If you have extra time, finish the
bonus as well.

Make sure there is a .gitignore file in your root directory with /node_modules within, so that you aren't pushing all 15k files up when you do your git commands

## Part 1: Sample Receipts

You'll be rendering some sample receipts:

```js
const receipts = [
  {
    id: 1,
    person: 'Jeremy',
    order: {
      main: 'Burrito',
      protein: 'Skirt Steak',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
      drink: 'Thai Iced Tea',
      cost: 22,
    },
    paid: false,
  },
  {
    id: 2,
    person: 'Brittany',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Chicken',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
      drink: 'Korchata',
      cost: 19,
    },
    paid: false,
  },
  {
    id: 3,
    person: 'Tom',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: null,
      sauce: "K'lla",
      toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20,
    },
    paid: false,
  },
  {
    id: 4,
    person: 'Jessica',
    order: {
      main: 'Burrito Bowl',
      protein: 'Carnitas',
      rice: null,
      sauce: "Jalapeno Honey",
      toppings: ['Grilled Corn', 'Pico De Gallo', 'Guacamole'],
      drink: 'Pineapple Jarritos',
      cost: 23,
    },
    paid: true,
  },
{
    id: 5,
    person: 'Sophie',
    order: {
      main: 'Burrito Bowl',
      protein: 'Birria',
      rice: 'white rice',
      sauce: "Hot Honey",
      toppings: ['Grilled Corn', 'Mango Salsa', 'Guacamole'],
      drink: 'Tamarind Jarritos',
      cost: 23,
    },
    paid: true,
  },
  {
    id: 6,
    person: 'Frank',
    order: {
      main: 'Taco Bowl',
      protein: 'Barbacoa',
      rice: 'yellow rice',
      sauce: null,
      toppings: null,
      drink: 'Mexican Coca Cola',
      cost: 19,
    },
    paid: false,
  },
];
```

Make a Receipt component that maps and renders the following data from the receipt:

- person
- order
  - main
  - protein
  - rice
  - sauce
  - drink
  - cost

Make sure to set up a conditional to control if someone has opted to skip an option ('null' for the value)

**Optional:** render the toppings


## Part 2: Conditionally render the receipts

Right now, all the receipts are not paid.

Modify App.js to only render a component if the receipt
has not been paid.

Then go into the receipt data and change a paid value to true, then verify that
the receipt disappears.



## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.
