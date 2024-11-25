import React from "react";
import shoeImage from './Images/product-image1.jpg'; // Make sure to import the image

const ProductSection = () => {
  const products = [
    { id: 1, name: "Product 1", price: "₹999.99", description: "This is a short description of Product 1." },
    { id: 2, name: "Product 2", price: "₹999.99", description: "This is a short description of Product 2." },
    { id: 3, name: "Product 3", price: "₹999.99", description: "This is a short description of Product 3." },
    { id: 4, name: "Product 4", price: "₹999.99", description: "This is a short description of Product 4." },
  ];

  return (
    <div id="product-section" style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={shoeImage} alt={product.name} style={styles.image} />
          <h3>{product.name}</h3>
          <p style={styles.price}>{product.price}</p>
          <p>{product.description}</p>
          <button style={styles.button}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",              // Display products in a row
    justifyContent: "center",     // Center the products horizontally
    flexWrap: "wrap",             // Allow wrapping to the next line if necessary
    gap: "1rem",                  // Add space between the product cards
    padding: "2rem",
  },
  card: {
    width: "250px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "1rem",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",         // Center content inside each card
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "10px 10px 0 0",
  },
  price: {
    color: "red",
    fontWeight: "bold",
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

export default ProductSection;
