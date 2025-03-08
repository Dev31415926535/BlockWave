import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/createProduct", {
      name,
      manufacturer,
      location
    });
    alert("Product Created");
  };

  return (
    <div>
      <h1>Create Product</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} placeholder="Manufacturer" />
      <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <button onClick={handleSubmit}>Create Product</button>
    </div>
  );
}