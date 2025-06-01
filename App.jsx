import React, { useState } from "react";
import FeedPlan from "./FeedPlan";
import CurrentProgress from "./CurrentProgress";
import ShowTime from "./ShowTime";

const App = () => {
  const [activeTab, setActiveTab] = useState("Feed Plan");

  const renderTab = () => {
    switch (activeTab) {
      case "Feed Plan":
        return <FeedPlan />;
      case "Current Progress":
        return <CurrentProgress />;
      case "Show Time":
        return <ShowTime />;
      default:
        return <FeedPlan />;
    }
  };

  return (
    <div className="p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4 text-center">Livestock Feed Calculator</h1>
      <div className="flex justify-center space-x-4 mb-6">
        {["Feed Plan", "Current Progress", "Show Time"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{renderTab()}</div>
    </div>
  );
};

export default App;
