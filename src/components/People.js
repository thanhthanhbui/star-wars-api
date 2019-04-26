import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Header, List, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const People = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    axios.get('https://swapi.co/api/people')
      .then(res => {
        setPeople(res.data.results)
      })
  }, [])

  return (
    <>
      <div style={{ zIndex: -1 }}>
        <Header as='h1'>Star Wars</Header>
        <br />
        <Card.Group itemsPerRow={5}>
          {
            people.map(p => (
              <Card key={p.url}>
                <Card.Content>
                  <Card.Header as='h3'>{p.name}</Card.Header>
                  <Card.Meta>Gender: {p.gender}</Card.Meta>
                  <Card.Meta>DOB: {p.birth_year}</Card.Meta>
                  <Card.Meta>Home Planet: <Link>{p.homeworld}</Link></Card.Meta>
                </Card.Content>
              </Card>
            ))
          }
        </Card.Group>
      </div>
      {/* <VideoBackground /> */}
    </>
  )
}

export default People