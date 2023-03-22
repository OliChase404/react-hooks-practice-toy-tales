import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({currentToys, setCurrentToys}) {

  const displayToys = currentToys.map((toy) => <ToyCard key={toy.id} toy={toy} deleteToy={deleteToy} incrementToyLikes={incrementToyLikes} />)

  function deleteToy(toy){
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: "DELETE"
    })
    .then(() => setCurrentToys((prevToys) => prevToys.filter((t) => t.id !== toy.id)))
  }

  function incrementToyLikes(toy){
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: 'PATCH',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        likes: (toy.likes + 1)
      }),
    })
    .then((resp) => resp.json())
    .then((data) => setCurrentToys((prevToys) => prevToys.map((t) => t.id === data.id ? data : t)))
  }

  return (
    <div id="toy-collection">{displayToys}</div>
  );
}

export default ToyContainer;
