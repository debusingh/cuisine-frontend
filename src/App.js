import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Title from './components/Title';
import AddCuisine from './components/AddCuisine'
import Switch from 'react-bootstrap/esm/Switch';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';


function App() {

  return (
    <BrowserRouter>
      <div >
        <Title />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/home" component={Dashboard} />
        <Route exact path="/addCuisine" component={AddCuisine} />
        <Route exact path="/tnc" component={PrivacyPolicy} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
