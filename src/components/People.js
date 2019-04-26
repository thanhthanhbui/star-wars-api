import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Header, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import Planet from './Planet'
import Species from './Species'

const People = ({ homeworld, }) => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    axios.get('https://swapi.co/api/people')
      .then(res => {
        setPeople(res.data.results)
      })
  }, [])

  return (
    <>
        <div style={styles}>
          <Header as='h1' style={{ textDecoration: 'underline' }}>Citizens of the Galaxy</Header>
          {people.map(char => (
            <div key={char.url}>
              <Header as='h2'>{char.name}</Header>
              <p>Gender: {char.gender}</p>
              <p>DOB: {char.birth_year}</p>
              <Species url={char.species} />
              <Planet url={char.homeworld} />
              <hr />
            </div>
          ))
          }
        </div>
    </>
  )
}

const styles = {
  fontFamily: 'Days One',
  color: '#FFFFFF',
  fontStyle: 'normal',
  fontVariant: 'normal',
  fontWeight: 500,
  lineHeight: '46.4px'
}

export default People