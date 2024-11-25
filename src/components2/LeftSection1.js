import React from "react";

const LeftSection = () => {
  return (
    <div style={styles.leftSection}>
      <h1>
        Nike <br /> Lorem ipsum dolor.
      </h1>
      <p>XYZ Series</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione
        fugiat ut dolores soluta possimus.
      </p>
      <button style={styles.button}>Check Out</button>
    </div>
  );
};

const styles = {
  leftSection: {
    flex: 1,
    backgroundColor: "#f8dede",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    color: "#000",
  },
  button: {
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "1rem",
  },
};

export default LeftSection;
