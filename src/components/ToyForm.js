import React, { useState } from "react";

function ToyForm({setCurrentToys}) {
  
  const [newToy, setNewToy] = useState({
    id: null,
    name: "",
    image: "",
    likes: 0
  })

  function handleFormChange(e){
    setNewToy({...newToy, [e.target.name]: e.target.value})
  }

  function handleFormSubmit(e){
    e.preventDefault()
    fetch('http://localhost:3001/toys',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
    .then((resp) => resp.json())
    .then((respToy) => {
      setCurrentToys((prevToys) => [respToy, ...prevToys])
    })


  }

  return (
    <div className="container">
      <form onSubmit={(e) => handleFormSubmit(e)} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => handleFormChange(e)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => handleFormChange(e)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
