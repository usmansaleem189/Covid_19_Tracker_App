import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import { Cards } from './Components/Cards/Cards';
import { CountryNav } from './Components/CountryNav/CountryNav';
import { Chart } from './Components/Chart/Chart';
import { List } from './Components/List/List';

import {fetchTotalStats, fetchCountriesName, fetchData} from '../src/api/api';
import {fetchDailyGlobalData, fetchContinentData} from '../src/api/api';

function App() {

const [state, setState] = useState({data:{}, country:''});
const [countryNames, setCountryNames] = useState([]);
const [globalData, setGlobalData] = useState([]);
const [continentsArray, setContinentArray] = useState([]);



useEffect(() => {
  const getTotalStats = async () => {
    const acquiredData = await fetchTotalStats();
    setState({data: acquiredData});
     console.log(acquiredData)
  }
  const getCountriesNames = async () => {
      const countriesNameList = await fetchCountriesName();
      setCountryNames(countriesNameList);
      // console.log(countriesNameList)
  }
  const getDailyGlobalData = async () =>{
    const dailyGlobalData = await fetchDailyGlobalData();
    setGlobalData(dailyGlobalData);
    // console.log(dailyGlobalData)
  }

  const getContinentData = async () => {
  const continentsData = await fetchContinentData();
    setContinentArray (continentsData);
    // console.log(continentsData)
  }

  getTotalStats();
  getCountriesNames();
  getDailyGlobalData();
  getContinentData();
  
},[] );


const handleChange = async (country) => {
  const getData = await fetchData(country);
  console.log(getData);
  //setState({data: getData});
}





const {data, country} = state;




  return (
    <div>
      <Cards data={data} />
      <CountryNav countriesNameList={countryNames} handleChange={handleChange}/>
      <Chart dailyGlobalData={globalData} continentsArray={continentsArray}/>
      {/* <List /> */}
    </div>
  );
}

export default App;
