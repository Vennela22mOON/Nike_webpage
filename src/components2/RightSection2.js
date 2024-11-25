import React from "react";
import Imageshoe1 from './Images/sample1.jpg';
import Imageshoe2 from './Images/sample2.jpg';
import Imageshoe3 from './Images/sample3.jpg';

const RightSection = () => {
  return (
    <div style={styles.rightSection}>
      <h1>
        Nike <span style={{ color: "red" }}>Lorem, ipsum.</span>
      </h1>
      <p>Exclusively Built for India</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        magnam aspernatur aut quos.
      </p>
      <div style={styles.buttons}>
        <button style={styles.redButton}>Check Out For The Products</button>
        <button style={styles.outlineButton}>View 360°</button>
      </div>
      <div style={styles.sampleImages}>
        <img src={Imageshoe1} alt="Sample 1" style={styles.image} />
        <img src={Imageshoe2} alt="Sample 2" style={styles.image} />
        <img src={Imageshoe3} alt="Sample 3" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  rightSection: {
    flex: 1,
    padding: "2rem",
  },
  buttons: {
    display: "flex",
    gap: "1rem",
    margin: "1rem 0",
  },
  redButton: {
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
  outlineButton: {
    backgroundColor: "#fff",
    color: "red",
    border: "2px solid red",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
  },
  sampleImages: {
    display: "flex",
    gap: "1rem",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: "10px",
  },
};

export default RightSection;
