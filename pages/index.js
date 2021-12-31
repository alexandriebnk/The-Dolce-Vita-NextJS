// thedolcevita.com/
import React, { useState, useEffect } from "react";

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuIsOpen]);

  return <div>Welcome to Next.js!</div>;
}

export default HomePage;
