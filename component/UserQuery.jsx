import React, { useState } from "react";

const UserQuery = () => {
  const [query, setQuery] = useState("");

  // Handle input change
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Handle submit
  const handleSubmit = () => {
    alert(`Submitted Query: ${query}`);
  };

  // Handle clear
  const handleClear = () => {
    setQuery("");
  };

  return (
    <div style={styles.container}>
      <h2>Enter Your Query</h2>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Type here..."
        style={styles.input}
      />
      <div style={styles.buttonContainer}>
        <button onClick={handleSubmit} style={styles.button}>
          Submit
        </button>
        <button
          onClick={handleClear}
          style={{ ...styles.button, backgroundColor: "#dc3545" }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

// CSS Styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "70vh", // Centers vertically
    textAlign: "center",
  },
  input: {
    width: "300px",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
  },
};

export default UserQuery;
