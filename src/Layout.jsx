import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";

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
    <div className=" bg-gradient-to-br from-gray-900 to-gray-950" style={{fontFamily: "Figtree"}}>
      <Header
        onLinkClick={handleScrollTo}
        refs={{ heroRef, aboutRef, skillRef, expRef, projRef, contactRef }}
      />

      <Outlet context={{ heroRef, aboutRef, skillRef, expRef, projRef, contactRef }} />

      <Footer />
    </div>
  );
};

export default Layout;
