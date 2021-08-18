import React from "react";
import "./style.css";
import TopBar from './components/TopBar.js';
import LineChart from './components/LineChart';
import Cards from './components/Cards.js';

export default function App() {
  return (
    <div>
      <TopBar />
      <h1>GitHub Times CMS</h1>
      <LineChart />
      <h2>The Latest Social Media Analytics</h2>
      <Cards />
    </div>
  );
}
