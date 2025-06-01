import React, { useState } from "react";

const FeedPlan = () => {
  const [livestockGroups, setLivestockGroups] = useState([
    {
      type: "Cattle",
      count: 0,
      healthStatus: "",
      feedType: "Alfalfa Cubes",
      durationDays: 0,
      dailyFeedPerAnimal: 0,
    },
  ]);

  const feedOptions = [
    "Alfalfa Cubes",
    "Corn",
    "Timothy Hay",
    "Orchard Grass",
    "Beet Pulp",
    "Supplements",
  ];

  const updateGroup = (index, field, value) => {
    const updated = [...livestockGroups];
    updated[index][field] = value;
    setLivestockGroups(updated);
  };

  const addGroup = () => {
    setLivestockGroups([
      ...livestockGroups,
      {
        type: "",
        count: 0,
        healthStatus: "",
        feedType: "Alfalfa Cubes",
        durationDays: 0,
        dailyFeedPerAnimal: 0,
      },
    ]);
  };

  const removeGroup = (index) => {
    const updated = [...livestockGroups];
    updated.splice(index, 1);
    setLivestockGroups(updated);
  };

  const calculateTotalFeed = (group) => {
    return group.count * group.dailyFeedPerAnimal * group.durationDays;
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Feed Plan</h2>
      {livestockGroups.map((group, index) => (
        <div key={index} className="mb-4 p-4 border rounded-xl shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Livestock Type (e.g., Goats)"
              className="border p-2 rounded"
              value={group.type}
              onChange={(e) => updateGroup(index, "type", e.target.value)}
            />
            <input
              type="number"
              placeholder="Head Count"
              className="border p-2 rounded"
              value={group.count}
              onChange={(e) => updateGroup(index, "count", parseInt(e.target.value))}
            />
            <input
              type="text"
              placeholder="Health Status"
              className="border p-2 rounded"
              value={group.healthStatus}
              onChange={(e) => updateGroup(index, "healthStatus", e.target.value)}
            />
            <select
              className="border p-2 rounded"
              value={group.feedType}
              onChange={(e) => updateGroup(index, "feedType", e.target.value)}
            >
              {feedOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Daily Feed per Animal (lbs)"
              className="border p-2 rounded"
              value={group.dailyFeedPerAnimal}
              onChange={(e) =>
                updateGroup(index, "dailyFeedPerAnimal", parseFloat(e.target.value))
              }
            />
            <input
              type="number"
              placeholder="Days Planned"
              className="border p-2 rounded"
              value={group.durationDays}
              onChange={(e) =>
                updateGroup(index, "durationDays", parseInt(e.target.value))
              }
            />
          </div>
          <p className="mt-2">
            Total Feed Needed:{" "}
            <span className="font-semibold text-blue-600">
              {calculateTotalFeed(group).toLocaleString()} lbs
            </span>
          </p>
          <button
            onClick={() => removeGroup(index)}
            className="text-sm text-red-600 mt-1"
          >
            Remove Group
          </button>
        </div>
      ))}
      <button
        onClick={addGroup}
        className="bg-green-600 text-white px-4 py-2 rounded shadow"
      >
        Add Livestock Group
      </button>
    </div>
  );
};

export default FeedPlan;
