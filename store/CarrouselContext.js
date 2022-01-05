import React from "react";

const CarrouselContext = React.createContext([
  {
    id: "A1",
    type: "Restaurant",
    src: "/images/carrousel/img/restaurant.jpg",
    title: "Good Food",
    text: "At the heart of our menu, our dishes, the raw products of our producers in Europe, mainly Italy and Greece. Products made in the purest tradition, from feta cheese to the incredible Parmigiano D.O.P by Paolo Gennari. We mainly work with lovers of craftsmanship who pass on their know-how from generation to generation",
    icon: "/images/carrousel/svg/restaurant.svg",
  },
  {
    id: "B2",
    type: "Bar",
    src: "/images/carrousel/img/bar.jpg",
    title: "Good Drink",
    text: "Enter this magical place and discover the intriguing cocktail bar of the Dolce Vita. Inspired by a creative concept, the spark born from the fusion of the energy of Los Angeles and Copacabana, the bar is set ablaze after dark, from 7:00 p.m. to 3:00 a.m. Now is the time to find out where the festivities are taking place",
    icon: "/images/carrousel/svg/bar.svg",
  },
  {
    id: "C3",
    type: "Pool",
    src: "/images/carrousel/img/pool.jpg",
    title: "Good Mood",
    text: "The best way to immerse yourself in the rare luxury of The Dolce Vita is to dive into the swimming pool. The presentation of the place alone is enough to convince. With her view over the rooftops of Los Angeles, and her fresco in the colors of the French Riviera, she's definitely one of the most pleasant in the city",
    icon: "/images/carrousel/svg/pool.svg",
  },
]);

export default CarrouselContext;
