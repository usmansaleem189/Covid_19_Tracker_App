import React from 'react';
import './App.css';
import { Cards } from './Components/Cards/Cards';
import { CountryNav } from './Components/CountryNav/CountryNav';
import { Chart } from './Components/Chart/Chart';
import { List } from './Components/List/List';


function App() {
  return (
    <div>
      <Cards />
      <CountryNav />
      <Chart />
      <List />
    </div>
  );
}

export default App;
