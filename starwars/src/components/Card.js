import React, {useState, useEffect} from 'react';
import { Card } from 'semantic-ui-react'


export default function CharacterCard(character) {

  console.log(character.character.name)

  return (
    <Card>
      <Card.Content>
        <Card.Header>{character.character.name}</Card.Header>
        <Card.Meta> Birth Year: {character.character.birth_year}</Card.Meta>
        <Card.Description>Gender: {character.character.gender} Hair Color: {character.character.hair_color} Height: {character.character.height} Mass: {character.character.mass} Skin Color: {character.character.skin_color}  </Card.Description>
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

