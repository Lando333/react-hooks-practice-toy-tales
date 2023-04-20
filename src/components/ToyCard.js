import React, { useState } from "react";


function ToyCard(props) {
  const { id, name, image, likes, donateToy } = props

  const [toyLikes, setToyLikes] = useState(0)

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes + toyLikes} Likes </p>
      <button className="like-btn" onClick={() => setToyLikes(toyLikes => toyLikes +1)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => donateToy(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
