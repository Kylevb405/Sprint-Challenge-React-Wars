import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import CharacterCard from './components/Card'
import { Card } from 'semantic-ui-react'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    const fetchData = () => {
      axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setCharacters (response.data.results)
        console.log(response.data.results)
      }) 
      .catch(error => console.error(error));
    }
    fetchData()

  },[])





  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className = "CharacterCard">
        {characters.map((character, index) => {
          return(
            <CharacterCard 
            character = {character} 
            key = {index} 
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;




