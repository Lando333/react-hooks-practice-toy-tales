import React from "react";


function ToyCard(props) {
  const { id, name, image, likes, donateToy, updateToyLikes } = props

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={() => updateToyLikes(id)}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => donateToy(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
