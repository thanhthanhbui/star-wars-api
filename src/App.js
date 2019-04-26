import React from 'react';
import { Route } from 'react-router-dom'
import People from './components/People'
import Planets from './components/Planets'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/people' component={People} />
        <Route exact path='/planets' component={Planets} />
      </div>
    </>
  );
}

export default App;
