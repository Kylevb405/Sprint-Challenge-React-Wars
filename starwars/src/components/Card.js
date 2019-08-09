import React, {useState, useEffect} from 'react';
import { Card } from 'semantic-ui-react'


export default function CharacterCard(State) {

  console.log(State.character.name)

  return (
    <Card>
      <Card.Content>
        <Card.Header>{State.character.name}</Card.Header>
        <Card.Meta> Birth Year: {State.character.birth_year}</Card.Meta>
        <Card.Description>Gender: {State.character.gender} Hair Color: {State.character.hair_color} Height: {State.character.height} Mass: {State.character.mass} Skin Color: {State.character.skin_color}  </Card.Description>
      </Card.Content>

    </Card>




//  header = {character.name}
//     meta = {character.birth_year}
//     description = {character.gender}
//     description = {character.hair_color}
//     description = {character.height}
//     description = {character.mass}
//     description = {character.skin_color}


    

      // <h1 className = "mainHeader" >{character.name}</h1>
      // <div className = "subHeader" >{character.birth_year}</div>
      // <div className = "extra" >{character.gender}</div>
      // <div className = "extra" >{character.har_color}</div>
      // <div className = "extra" >{character.height}</div>
      // <div className = "extra" >{character.mass}</div>
      // <div className = "extra" >{character.skin_color}</div>

       
  )
}

