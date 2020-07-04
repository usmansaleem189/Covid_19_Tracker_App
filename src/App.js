import React from 'react';
import './App.css';
import { Cards } from './Components/Cards/Cards';
import { CountryNav } from './Components/CountryNav/CountryNav';
import { Chart } from './Components/Chart/Chart';


function App() {
  return (
    <div>
      <Cards />
      <CountryNav />
      <Chart />
    </div>
  );
}

export default App;
