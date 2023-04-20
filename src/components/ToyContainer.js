import React from "react";
import ToyCard from "./ToyCard";

// toyLikes, updateToyLikes
function ToyContainer({ toysList, donateToy }) {

  const toyElements = toysList.map(toy => {
    return <ToyCard
      image={toy.image}
      likes={toy.likes}
      name={toy.name}
      key={toy.id}
      id={toy.id}
      donateToy={donateToy}
    />
  })


  return (
    <div id="toy-collection">
      {toyElements}
    </div>
  );
}

export default ToyContainer;
