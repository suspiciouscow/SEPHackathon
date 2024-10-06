// frontend/src/components/AddCaretaker.js
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AddCaretaker = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [availability, setAvailability] = useState("");

  const handleAddCaretaker = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "caretakers"), {
        name,
        location,
        experience,
        skills: skills.split(",").map((skill) => skill.trim()),
        availability,
      });
      alert("Caretaker added successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleAddCaretaker}>
      <h2>Add Caretaker</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Years of Experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Skills (comma separated)"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Availability"
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        required
      />
      <button type="submit">Add Caretaker</button>
    </form>
  );
};

export default AddCaretaker;
