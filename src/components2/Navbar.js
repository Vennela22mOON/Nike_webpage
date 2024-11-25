import React from "react";
import ImageNike from "./Images/nike.png";

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <img src={ImageNike} alt="Nike" style={{ width: 50 }} />
      </div>
      <ul style={styles.navLinks}>
        <li>
          <a href="/" style={styles.link}>Home</a>
        </li>
        <li>
          <a href="#product-section" style={styles.link}>Products</a> {/* Internal anchor link */}
        </li>
        <li>
          <a href="#about" style={styles.link}>About us</a>
        </li>
        <li>
          <a href="#contact" style={styles.link}>Contact us</a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",  // Keep only one definition here
    padding: "1rem 2rem",
    background: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  navLinks: {
    display: "flex",
    color: "red",
    listStyle: "none",
    gap: "1.5rem",
    fontSize: "1.2rem",
  },
  link: {
    textDecoration: "none",
    color: "red",
  }
};

export default NavBar;
