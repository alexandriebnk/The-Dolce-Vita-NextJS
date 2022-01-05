import React from "react";

const SiteContext = React.createContext({
  address: "414 Bay Avenue, Los Angeles, CA",
  icons: {
    logo: "/images/site/svg/logo.svg",
    instagram: "/images/site/svg/instagram.svg",
  },
});

export default SiteContext;
