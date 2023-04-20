import React from "react";

function ToyForm({ addNewToy, toyName, inputNewToyName, toyImage, inputNewToyImage }) {
  
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={addNewToy}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => inputNewToyName(e.target.value)}
          value={toyName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={(e) => inputNewToyImage(e.target.value)}
          value={toyImage}
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
