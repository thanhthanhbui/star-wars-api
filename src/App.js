import React from 'react';
import { Route } from 'react-router-dom'
import People from './components/People'
import Planets from './components/Planets'

function App() {
  return (
    <>
      <Route exact path='/people' component={People} />
      <Route exact path='/planets' component={Planets} />
    </>
  );
}

export default App;
