import React, { useEffect, useState } from "react";
import NavBar from "./components2/Navbar";
import LeftSection from "./components2/LeftSection1";
import RightSection from "./components2/RightSection2";
import ProductSection from "./components2/ProductSection";
import About from "./components2/About";
import ShoeAnimation from "./components2/ShoeAnimation"; // New shoe animation component
import "./components2/App.css";

const App = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      <div className={animate ? "slide-in" : ""}>
        <NavBar />
      </div>
      <div className={animate ? "slide-in" : ""} style={styles.mainContent}>
        <LeftSection />
        <ShoeAnimation /> {/* Central spinning shoe */}
        <RightSection />
      </div>
      <div className={animate ? "slide-in" : ""}>
        <ProductSection />
      </div>
      <div className={animate ? "slide-in" : ""}>
        <About />
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
  },
  mainContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // Center vertically
    gap: "2rem",
    padding: "2rem",
    position: "relative",
  },
};

export default App;
