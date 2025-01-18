import React from "react";
import { FaHome, FaDollarSign, FaBeer } from "react-icons/fa";

const App = () => {
  return (
    <div style={{ fontSize: "2rem" }}>
      <p>
        <FaHome /> Icone Home
      </p>
      <p>
        <FaDollarSign /> Icone Dollar
      </p>
      <p>
        <FaBeer /> Icone Beer
      </p>
    </div>
  );
};

export default App;
