import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BASE_URL } from './constants/deploy';
import CharacterList from './components/CharacterList.js';
import Details from './components/Details.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterInfos, setCharacterInfos] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  console.log("This is currentCharacter", currentCharacter);

  const openDetails = info => {
    setCurrentCharacter(info);
  }

  const closeData = () => {
    setCurrentCharacter(null);
  }

  const eachDetail = characterInfos.map(char => {
      return char;
    });

  console.log("This is each detail", eachDetail);

  useEffect(() => { 
    axios.get(`${BASE_URL}`)
    .then(res => {
      setCharacterInfos(res.data.results);
    })
    .catch(err => {
      
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characterInfos.map(char => {
          return <CharacterList key={char.name} info={char} action={openDetails} />
        })
      }
      {
        currentCharacter && <Details eachDetail={currentCharacter} characterInfo={currentCharacter} close={closeData} />
      }
    </div>
  )
}

export default App;

