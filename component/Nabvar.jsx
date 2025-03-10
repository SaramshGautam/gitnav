import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>GitNavigator</h2>
      <ul style={styles.navLinks}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

// Updated inline styles
const styles = {
  navbar: {
    position: "fixed", // Fix the navbar at the top
    top: 0, // Align it to the top
    left: 0, // Align it to the left
    width: "100%", // Make it span the entire width
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "#333",
    color: "white",
    zIndex: 1000, // Ensure it's above other elements
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
};

export default Navbar;
