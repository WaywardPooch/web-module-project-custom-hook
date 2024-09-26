// ========== IMPORTS
// Libraries
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
// Components
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
// Hooks
import useDarkMode from "./hooks/useDarkMode";
// Styles
import "./styles.scss";

// ========== DEFINITIONS
const App = () => {
  // ========== STATES
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode(false);

  // ========== SIDE EFFECTS
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  }, []);

  // ========== MARKUP
  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
