import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [currentToys, setCurrentToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then((resp) => resp.json())
    .then((toys) => setCurrentToys(() => toys))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm setCurrentToys={setCurrentToys} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer setCurrentToys={setCurrentToys} currentToys={currentToys} />
    </>
  );
}

export default App;
