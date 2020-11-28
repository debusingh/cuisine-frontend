import { CardDeck } from 'react-bootstrap';
import './App.css';
import FoodListing from './components/FoodListing';

import Title from './components/Title'

function App() {
  return (
    <div className="App">
      <Title/>
      <FoodListing/>
    
    </div>
  );
}

export default App;
