import React from "react";
import redShoeImage from "./Images/shoe.png"; // Ensure this image path is correct

const ShoeAnimation = () => {
  return (
    <div style={styles.container}>
      <img src={redShoeImage} alt="Spinning Shoe" style={styles.shoe} />
      <style>
        {`
          @keyframes spinOnceAndSettle {
            0% {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    position: "absolute", // Ensures it's independent of surrounding layout
    top: "50%", // Center vertically
    left: "50%", // Center horizontally in the left section
    transform: "translate(-50%, -50%)", // Ensures proper alignment
    animation: "spinOnceAndSettle 3s linear", // Spins once in 3 seconds
    animationFillMode: "forwards", // Retain the final state after the animation
  },
  shoe: {
    width: "450px", // Size of the shoe, adjust as per design
    height: "auto", // Maintain aspect ratio
    transform: "rotate(30deg)", // Final cross angle for styling after spin
  },
};

export default ShoeAnimation;
