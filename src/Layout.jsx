import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import ScrollToTopButton from "./component/ScrollToTopButton";

const Layout = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const expRef = useRef(null);
  const projRef = useRef(null);
  const contactRef = useRef(null);


  // Scroll handler
  const handleScrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950"
      style={{ fontFamily: "Playpen Sans" }}
    >
      <ScrollToTopButton/>
      <Header
        onLinkClick={handleScrollTo}
        refs={{ heroRef, aboutRef, skillRef, expRef, projRef, contactRef }}
      />

      <Outlet
        context={{ heroRef, aboutRef, skillRef, expRef, projRef, contactRef }}
      />

      <Footer />
    </div>
  );
};

export default Layout;
