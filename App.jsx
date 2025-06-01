import React, { useState } from "react";
import FeedPlan from "./FeedPlan";
import CurrentProgress from "./CurrentProgress";
import ShowTime from "./ShowTime";
import "./index.css"; // ensure this import is present

export default function App() {
  const [activeTab, setActiveTab] = useState("Feed Plan");

  const tabs = ["Feed Plan", "Current Progress", "Show Time"];

  return (
    <div className="app-card">
      <h1>Livestock Feed Calculator</h1>

      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-button ${
              activeTab === tab ? "active" : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Render the selected tab */}
      <div>
        {activeTab === "Feed Plan" && <FeedPlan />}
        {activeTab === "Current Progress" && <CurrentProgress />}
        {activeTab === "Show Time" && <ShowTime />}
      </div>
    </div>
  );
}
