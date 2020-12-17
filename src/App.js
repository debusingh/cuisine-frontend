import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Title from './components/Title';
import AddCuisine from './components/AddCuisine'
import Switch from 'react-bootstrap/esm/Switch';


function App() {

  return (
    <BrowserRouter>
      <div >
        <Title />
          <Route path="/home" component={Dashboard} />
          <Route exact path="/addCuisine" component={AddCuisine} />
      </div>
    </BrowserRouter>
  );
}

export default App;
