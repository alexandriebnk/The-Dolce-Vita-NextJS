import React from "react";
import classes from "./BookingLink.module.css";
import Link from "next/link";

const BookingLink = ({ onClick }) => {
  return (
    <Link href="/book-a-table" onClick={onClick}>
      <a className={classes.link}>BOOK A TABLE</a>
    </Link>
  );
};

export default BookingLink;
