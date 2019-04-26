import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Header, List, Image } from 'semantic-ui-react';
import VideoBackground from './VideoBackground'

const Planets = ({ }) => {
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    axios.get('https://swapi.co/api/planets')
      .then(res => {
        setPlanets(res.data.results)
      })
  }, [])

  const renderPlanets = () => {
    return (
    <div style={{ zIndex: -1, textAlign: 'center' }}>
        <Image src='http://imageshack.com/a/img922/3783/oyvsRd.png' />
    <div style={styles}>
          <Header as='h1' style={{ textDecoration: 'underline' }}>Planets of the Galaxy</Header>
    {planets.map(planet => (
      <div key={planet.url} style={styles}>
        <Header as='h3'>{planet.name}</Header>
        <p>Climate: {planet.climate}</p>
        <p>Terrain: {planet.terrain}</p>
        <p>Population: {planet.population}</p>
        <p>Diameter: {planet.diameter}</p>
        <hr />
      </div>
    ))}
    </div>
    <VideoBackground />
    </div>
    )}

  return (
    <>
      <List>
        {renderPlanets()}
      </List>
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

export default Planets