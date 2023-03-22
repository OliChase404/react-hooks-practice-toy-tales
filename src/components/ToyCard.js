import React from "react";

function ToyCard({toy, incrementToyLikes, deleteToy}) {
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={() => incrementToyLikes(toy)} className="like-btn">Like</button>
      <button onClick={() => deleteToy(toy)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
