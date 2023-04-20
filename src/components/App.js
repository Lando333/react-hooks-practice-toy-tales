import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const baseUrl = 'http://localhost:3001/'
const toysUrl = baseUrl + 'toys/'

function App() {

  const [showForm, setShowForm] = useState(false);
  const [toysList, setToysList] = useState([])

  const [toyName, setToyName] = useState("")
  const [toyImage, setToyImage] = useState("")
  
  
  function updateToyLikes(id) {
    const updatedLikeObj = toysList.splice( id -2, 1)
    fetch(toysUrl + id, {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        likes: updatedLikeObj[0].likes +1
      })
    })
      .then(r => r.json())
      .then(fetchToys)
  }

  // Used to DELETE toy from list
  const fetchDeleteObj = {
    method: 'DELETE',
    headers: {
      "Content-type": "application/json"
    }
  }

  function donateToy(id) {
    fetch(toysUrl + id, fetchDeleteObj)
      .then(r => r.json())
      .then(fetchToys)
  }

  // Used to POST new toy to list
  function inputNewToyName(name) {
    setToyName(name)
  }
  function inputNewToyImage(image) {
    setToyImage(image)
  }

  const fetchPostObj = {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      name: toyName,
      image: toyImage,
      likes: 0
    })
  }
  
  function addNewToy(e) {
    e.preventDefault()
    fetch(toysUrl, fetchPostObj)
      .then(r => r.json())
      .then(setToysList)
    setToyName("")
    setToyImage("")
  }
  
  // Used to GET full toy database
  useEffect(fetchToys, [])
  function fetchToys() {
    fetch(toysUrl)
      .then(r => r.json())
      .then(toysData => setToysList(toysData))
  }
  
  function toggleForm() {
    setShowForm((showForm) => !showForm);
  }
  
  return (
    <>
      <Header />
      {showForm ?
        <ToyForm
        toyName={toyName}
        inputNewToyName={inputNewToyName}
        toyImage={toyImage}
        inputNewToyImage={inputNewToyImage}
          addNewToy={addNewToy} />
        : null
      }

      <div className="buttonContainer">
        <button onClick={toggleForm}>Add a Toy</button>
      </div>
      <ToyContainer
        // toyLikes={toyLikes}
        updateToyLikes={updateToyLikes}
        donateToy={donateToy}
        toysList={toysList}
      />
    </>
  );
}

export default App;
