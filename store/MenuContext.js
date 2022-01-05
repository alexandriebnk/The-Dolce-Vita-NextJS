import React from "react";

const MenuContext = React.createContext({
  starters: {
    icon: "/images/menu/svg/starters.svg",
    name: "starters",
    items: [
      {
        src: "/images/menu/starters/1.jpg",
        title: "Snobbish Radish",
        text: "Sliced ​​radishes, coarse salt and fried onions",
        price: "$8.00",
      },
      {
        src: "/images/menu/starters/2.jpg",
        title: "Tapas",
        text: "Mix of Spanish recipes on slice of French baguette",
        price: "$12.00",
      },
      {
        src: "/images/menu/starters/3.jpg",
        title: "Pizza Roma",
        text: "Pizza made with pita bread, cream, avocados and tomatoes",
        price: "$14.00",
      },
      {
        src: "/images/menu/starters/4.jpg",
        title: "Avocado Toats",
        text: "Toasted cereal bread, avocado, lemon juice and sesame seeds",
        price: "$14.00",
      },
      {
        src: "/images/menu/starters/5.jpg",
        title: "Kiwi Tasty",
        text: "French toast, cream cheese, nuts and kiwi slices",
        price: "$14.00",
      },
      {
        src: "/images/menu/starters/6.jpg",
        title: "Hummus",
        text: "Lebanese chickpea hummus, olive oil and spices",
        price: "$17.00",
      },
      {
        src: "/images/menu/starters/7.jpg",
        title: "Mix Party",
        text: "Tasting of sweet and savory flavors on brioche toast",
        price: "$18.00",
      },
      {
        src: "/images/menu/starters/8.jpg",
        title: "Fajitas",
        text: "Do It Yourself chicken fajitas",
        price: "$20.00",
      },
    ],
  },
  salads: {
    icon: "/images/menu/svg/salads.svg",
    name: "salads",
    items: [
      {
        src: "/images/menu/salads/1.jpg",
        title: "Sparkling",
        text: "Strawberry pieces, mint leaves and feta cheese",
        price: "$12.00",
      },
      {
        src: "/images/menu/salads/2.jpg",
        title: "Mozzarella",
        text: "Tomatoes, mozzarella cheese and basil",
        price: "$12.00",
      },
      {
        src: "/images/menu/salads/3.jpg",
        title: "Ceasar",
        text: "Lettuce heart, grated cheese,tomatoes and fried chicken pieces",
        price: "$13.00",
      },
      {
        src: "/images/menu/salads/4.jpg",
        title: "Mediterranean",
        text: "Spinach leaves, roasted eggplant slices, pomegranate and peach",
        price: "$14.00",
      },
      {
        src: "/images/menu/salads/5.jpg",
        title: "Turkish",
        text: "Pieces of tofu, pistachio, coriander and linseed oil",
        price: "$14.00",
      },
      {
        src: "/images/menu/salads/6.jpg",
        title: "Simple",
        text: "Mixture of raw cooked products",
        price: "$15.00",
      },
      {
        src: "/images/menu/salads/7.jpg",
        title: "Summer",
        text: "Tomatoes, onions, olive oil and slice of cereal bread",
        price: "$15.00",
      },
      {
        src: "/images/menu/salads/8.jpg",
        title: "Seasonal Poké",
        text: "Vinegar rice base, gravelax salmon, cabbage leaves and seasonal vegetables",
        price: "$15.00",
      },
    ],
  },
  main: {
    icon: "/images/menu/svg/main.svg",
    name: "main",
    items: [
      {
        src: "/images/menu/main/1.jpg",
        title: "Pasta Parmiggiano",
        text: "Italian pasta, roasted tomatoes, parmiggiano cheese",
        price: "$15.00",
      },
      {
        src: "/images/menu/main/2.jpg",
        title: "Stuffed EggPlant",
        text: "Roasted eggplants stuffed with veal, vegetables",
        price: "$15.00",
      },
      {
        src: "/images/menu/main/3.jpg",
        title: "Lemon Spaghetti",
        text: "Al dente spaghetti with lemon juice",
        price: "$15.00",
      },
      {
        src: "/images/menu/main/4.jpg",
        title: "Vegetable Soup",
        text: "Seasonal vegetables mixed with cream",
        price: "$16.00",
      },
      {
        src: "/images/menu/main/5.jpg",
        title: "Healthy Bowl",
        text: "Bulgur, pumpkin, onions and spinach leaves",
        price: "$16.00",
      },
      {
        src: "/images/menu/main/6.jpg",
        title: "Salmon Plancha",
        text: "Cooked salmon, green beans, bulgur wheat and honey carrot",
        price: "$18.00",
      },
      {
        src: "/images/menu/main/7.jpg",
        title: "Beef Ribs",
        text: "Pulled piece of beef and potato gratin",
        price: "$18.00",
      },
      {
        src: "/images/menu/main/8.jpg",
        title: "Truffle Pizza",
        text: "Pizza with cream, tomato and thin slices of black truffles",
        price: "$20.00",
      },
    ],
  },
  desserts: {
    icon: "/images/menu/svg/desserts.svg",
    name: "desserts",
    items: [
      {
        src: "/images/menu/desserts/1.jpg",
        title: "Blossom",
        text: "Cream of blueberry and cherry blossom",
        price: "$6.00",
      },
      {
        src: "/images/menu/desserts/2.jpg",
        title: "Orange Velvet",
        text: "Mix of nuts, red nectarine and yogurt",
        price: "$6.00",
      },
      {
        src: "/images/menu/desserts/3.jpg",
        title: "Roasty Peach",
        text: "Roasted peach slices, spices and yogurt",
        price: "$7.00",
      },
      {
        src: "/images/menu/desserts/4.jpg",
        title: "Tarte Tatin",
        text: "Slice of pie with compote and apple slices",
        price: "$7.00",
      },
      {
        src: "/images/menu/desserts/5.jpg",
        title: "Panna Cotta",
        text: "Vanilla jelly cream, pieces of strawberry",
        price: "$7.00",
      },
      {
        src: "/images/menu/desserts/6.jpg",
        title: "Pinky Lady",
        text: "Strawberry pastry cream, almond shavings and mint leaves",
        price: "$8.00",
      },
      {
        src: "/images/menu/desserts/7.jpg",
        title: "Caramel Waffle",
        text: "Waffle, vanilla ice cream, red fruits and caramel sauce",
        price: "$8.00",
      },
      {
        src: "/images/menu/desserts/8.jpg",
        title: "Creamy Strawberry",
        text: "French pancakes, cream and strawberries",
        price: "$10.00",
      },
    ],
  },
  brunch: {
    icon: "/images/menu/svg/brunch.svg",
    name: "brunch",
    items: [
      {
        src: "/images/menu/brunch/1.jpg",
        title: "Fresh Fruits",
        text: "Pomegranate, blueberries, mint leaves and sliced ​​citrus fruits",
        price: "$12.00",
      },
      {
        src: "/images/menu/brunch/2.jpg",
        title: "Frenchy",
        text: "Yogurt, slices of kiwi, figs and lemon, cherry",
        price: "$12.00",
      },
      {
        src: "/images/menu/brunch/3.jpg",
        title: "Crêpes Suzette",
        text: "French pancakes, honey, orange and cream",
        price: "$13.00",
      },
      {
        src: "/images/menu/brunch/4.jpg",
        title: "Pistachio",
        text: "Pistachio yogurt, melon squares and figs",
        price: "$13.00",
      },
      {
        src: "/images/menu/brunch/5.jpg",
        title: "Pancakes Power",
        text: "Pancakes puffed up with sugar, almonds",
        price: "$14.00",
      },
      {
        src: "/images/menu/brunch/6.jpg",
        title: "Banana Mood",
        text: "Banana and honey pancakes",
        price: "$16.00",
      },
      {
        src: "/images/menu/brunch/7.jpg",
        title: "Wedding Gifts",
        text: "Cupakes with seasonal fruits and pastry cream",
        price: "$18.00",
      },
      {
        src: "/images/menu/brunch/8.jpg",
        title: "Honey Moon",
        text: "Full brunch, waffles and hot drinks",
        price: "$20.00",
      },
    ],
  },
  cocktails: {
    icon: "/images/menu/svg/cocktails.svg",
    name: "cocktails",
    items: [
      {
        src: "/images/menu/cocktails/1.jpg",
        title: "Lemonade",
        text: "Lemon juice, mint leaves, alcohol-free",
        price: "$12.00",
      },
      {
        src: "/images/menu/cocktails/2.jpg",
        title: "Cosmopolitan",
        text: "Vodka, triple-sec, lemon, cranberry juice",
        price: "$12.00",
      },
      {
        src: "/images/menu/cocktails/3.jpg",
        title: "Bloody Mary",
        text: "Vodka, lemon juice, tomato juice, tabasco, pepper",
        price: "$12.00",
      },
      {
        src: "/images/menu/cocktails/4.jpg",
        title: "Mojito",
        text: "Rum, sugar, lemon juice, mint leaves",
        price: "$12.00",
      },
      {
        src: "/images/menu/cocktails/5.jpg",
        title: "Old Fashion",
        text: "Bourbon, sparkling water, sugar, pieces of orange",
        price: "$12.00",
      },
      {
        src: "/images/menu/cocktails/6.jpg",
        title: "Margarita",
        text: "Tequila, triple-sec, lime juice",
        price: "$12.00",
      },
      {
        src: "/images/menu/cocktails/7.jpg",
        title: "Tequila Sunrise",
        text: "Tequila, orange juice, grenadine",
        price: "$12.00",
      },
      {
        src: "/images/menu/cocktails/8.jpg",
        title: "Frozen Raspberry",
        text: "Vodka, frozen Raspberry smoothies",
        price: "$14.00",
      },
    ],
  },
});

export default MenuContext;
