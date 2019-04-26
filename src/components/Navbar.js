import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return(
    <Menu style={styles}>
      <Menu.Item as={Link} to='/' style={styles}>People</Menu.Item>
      <Menu.Item as={Link} to='/planets' style={styles}>Planets</Menu.Item>
    </Menu>
  )
}

const styles = {
  marginLeft: '1em',
  marginTop: '1em',
  color: 'white',
  fontFamily: 'Days Ones',
  fontWeight: 600
}

export default Navbar