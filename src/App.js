import React from "react";
import "./style.css";
import TopBar from './components/TopBar.js';
import LineChart from './components/LineChart';
import Cards from './components/Cards.js';
import TopCards from './components/TopCards';

export default function App() {
  return (
    <div>
      <TopBar />
      <h1>Global Times CMS</h1>
      <h2>The Top-Three Best Performing Stories (All-Time)</h2>
      <TopCards />
      <LineChart />
      <h2>The Latest Social Media Analytics</h2>
      <Cards />
    </div>
  );
}
