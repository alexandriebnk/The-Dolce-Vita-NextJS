import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import NavigationContext from "../store/NavigationContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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

  return (
    <NavigationContext.Provider
      value={{
        isLoaded,
        setIsLoaded,
        menuIsOpen,
        setMenuIsOpen,
      }}
    >
      <Header />
      <Menu />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </NavigationContext.Provider>
  );
}

export default MyApp;
