import React, { useState } from "react";

export default function FeedPlan() {
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

  const updateGroup = (i, field, value) => {
    const copy = [...livestockGroups];
    copy[i][field] = value;
    setLivestockGroups(copy);
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

  const removeGroup = (i) => {
    setLivestockGroups(livestockGroups.filter((_, idx) => idx !== i));
  };

  const calculateTotalFeed = (grp) =>
    grp.count * grp.dailyFeedPerAnimal * grp.durationDays;

  return (
    <div>
      <h2>Feed Plan</h2>

      {livestockGroups.map((grp, idx) => (
        <div key={idx} className="group-card">
          <div className="grid-2">
            <div>
              <label>Livestock Type</label>
              <input
                type="text"
                placeholder="e.g., Goats"
                value={grp.type}
                onChange={(e) => updateGroup(idx, "type", e.target.value)}
              />
            </div>

            <div>
              <label>Head Count</label>
              <input
                type="number"
                placeholder="0"
                value={grp.count}
                onChange={(e) =>
                  updateGroup(idx, "count", parseInt(e.target.value))
                }
              />
            </div>

            <div>
              <label>Health Status</label>
              <input
                type="text"
                placeholder="e.g., Healthy"
                value={grp.healthStatus}
                onChange={(e) =>
                  updateGroup(idx, "healthStatus", e.target.value)
                }
              />
            </div>

            <div>
              <label>Feed Type</label>
              <select
                value={grp.feedType}
                onChange={(e) => updateGroup(idx, "feedType", e.target.value)}
              >
                {feedOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label>Daily Feed/Animal (lbs)</label>
              <input
                type="number"
                placeholder="0"
                value={grp.dailyFeedPerAnimal}
                onChange={(e) =>
                  updateGroup(idx, "dailyFeedPerAnimal", parseFloat(e.target.value))
                }
              />
            </div>

            <div>
              <label>Days Planned</label>
              <input
                type="number"
                placeholder="0"
                value={grp.durationDays}
                onChange={(e) =>
                  updateGroup(idx, "durationDays", parseInt(e.target.value))
                }
              />
            </div>
          </div>

          <p>
            Total Feed Needed:{" "}
            <strong>
              {calculateTotalFeed(grp).toLocaleString()} lbs
            </strong>
          </p>

          <button
            onClick={() => removeGroup(idx)}
            className="button-secondary"
          >
            Remove Group
          </button>
        </div>
      ))}

      <button onClick={addGroup} className="button-primary">
        + Add Livestock Group
      </button>
    </div>
  );
}
