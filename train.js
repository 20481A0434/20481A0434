import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrainSchedule = async () => {
      try {
        const response = await axios.get("<API_ENDPOINT>");
        setTrains(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching train schedule:", error);
        setLoading(false);
      }
    };

    fetchTrainSchedule();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Train Schedule</h1>
      {loading ? (
        <p>Loading train schedule...</p>
      ) : (
        <ul className="train-list">
          {trains.map((train) => (
            <li key={train.id} className="train-item">
              <div>
                <span className="train-id">Train {train.id}</span>
                <span className="train-time">
                  Departure: {train.departure} - Arrival: {train.arrival}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;