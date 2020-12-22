import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Title from './components/Title';
import AddCuisine from './components/AddCuisine'
import Switch from 'react-bootstrap/esm/Switch';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';



function App() {

  const [userMail, setUserMail] = useState('');
  let userLoggedIn = false;

  var userLoggedInCallback = (mail) => {

    console.log('Received Mail in Callback : ', mail);
    setUserMail(mail);
    userLoggedIn = userMail.length>0;
  };

  return (
    <BrowserRouter>
      <div >
        <Title onUserLogin={userLoggedInCallback}/>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/home" component={Dashboard} />
        <Route exact path="/addCuisine" component={ userMail != undefined && userMail.length>0 ? AddCuisine : Dashboard}/>
        <Route exact path="/tnc" component={PrivacyPolicy} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
