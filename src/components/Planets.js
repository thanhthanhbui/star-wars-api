import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const Planets = () => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    axios.get('https://swapi.co/api/planets')
      .then(res => {
        setPlanets(res.data.results)
      })
  }, [])

  const renderPlanets = () => {
    return planets.map(p => (
      <div key={p.url}>
        <Header as='h3'>{p.name}</Header>
        <p>Climate: {p.climate}</p>
        <p>Terrain: {p.terrain}</p>
        <p>Population: {p.population}</p>
      </div>
    ))
  }

  return (
    <>
      <Header as='h1'>Star Wars</Header>
      <br />
      <List>
        { renderPlanets() }
      </List>
    </>
  )
}

export default Planets