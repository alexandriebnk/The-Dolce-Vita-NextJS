import React from "react";

const ReservationContext = React.createContext({
  frameTitle: "BOOK A TABLE",
  description: {
    title: "Enjoy a bay front moment",
    text: "A dinner planned ? Romantic, with family or friends by the pool, don't hesitate to book to fully enjoy your moment. The team takes care of everything !",
  },
  icons: {
    guests: "/images/reservation/svg/guests.svg",
    calendar: "/images/reservation/svg/calendar.svg",
    time: "/images/reservation/svg/time.svg",
    name: "/images/reservation/svg/name.svg",
    phone: "/images/reservation/svg/phone.svg",
    email: "/images/reservation/svg/email.svg",
  },
  confirmation: {
    icon: "/images/reservation/svg/sent.svg",
    title: "Thank you !",
    text: "Your reservation has been taken into account ! Don't forget your sunglasses and your good mood, The Dolce Vita Restaurant looks forward to welcoming you",
  },
});

export default ReservationContext;
