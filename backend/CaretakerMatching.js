import React, { useState } from 'react';
import { availableCaretakers } from '../mockCaretakers'; // Importing the mock data
import './CaretakerMatching.css'; // Optional CSS import

const CaretakerMatching = () => {
  const [preferences, setPreferences] = useState({
    availability: '',
    budget: '',
    experience: '',
  });

  const [matchedCaretakers, setMatchedCaretakers] = useState([]);

  const handleChange = (e) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock data for available caretakers
    const availableCaretakers = [
      { id: 1, name: "Alice", availability: "Full-time", budget: 1200, experience: 6 },
      { id: 2, name: "Bob", availability: "Part-time", budget: 800, experience: 3 },
      { id: 3, name: "Charlie", availability: "Full-time", budget: 1000, experience: 5 },
    ];

    // Match logic (simple filtering)
    const matched = availableCaretakers.filter(caretaker => {
      return (
        caretaker.availability.includes(preferences.availability) &&
        caretaker.budget <= parseInt(preferences.budget) &&
        caretaker.experience >= parseInt(preferences.experience)
      );
    });

    // Set matched caretakers to state
    setMatchedCaretakers(matched);
  };

  return (
    <div>
      <h2>Find a Caretaker</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Availability:
          <input
            name="availability"
            value={preferences.availability}
            onChange={handleChange}
            placeholder="e.g., Full-time, Part-time"
          />
        </label>
        <label>
          Budget:
          <input
            name="budget"
            value={preferences.budget}
            onChange={handleChange}
            placeholder="e.g., 1000"
          />
        </label>
        <label>
          Experience (years):
          <input
            name="experience"
            value={preferences.experience}
            onChange={handleChange}
            placeholder="e.g., 5"
          />
        </label>
        <button type="submit">Find Caretaker</button>
      </form>

      <h3>Matched Caretakers:</h3>
      {matchedCaretakers.length > 0 ? (
        <ul>
          {matchedCaretakers.map(caretaker => (
            <li key={caretaker.id}>
              {caretaker.name} - {caretaker.availability}, ${caretaker.budget}, {caretaker.experience} years
            </li>
          ))}
        </ul>
      ) : (
        <p>No caretakers matched your criteria.</p>
      )}
    </div>
  );
};

export default CaretakerMatching;
