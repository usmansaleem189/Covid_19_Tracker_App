import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import { Cards } from './Components/Cards/Cards';
import { CountryNav } from './Components/CountryNav/CountryNav';
import { Chart } from './Components/Chart/Chart';
import { List } from './Components/List/List';
import coronaimage from './images/image1.jpg'

import {fetchTotalStats, fetchCountriesName, fetchData, fetchDailyCountryData} from '../src/api/api';
import {fetchDailyGlobalData, fetchContinentData} from '../src/api/api';

function App() {

const [state, setState] = useState({});
const [countryNames, setCountryNames] = useState([]);
const [dailyData, setDailyData] = useState([]);
const [totalData, setTotalData] = useState([]);


useEffect(() => {
  const getTotalStats = async () => {
    const acquiredData = await fetchTotalStats();
    setState(acquiredData);
    //  console.log(acquiredData)
  }
  const getCountriesNames = async () => {
      const countriesNameList = await fetchCountriesName();
      setCountryNames(countriesNameList);
      // console.log(countriesNameList)
  }
  const getDailyGlobalData = async () =>{
    const dailyGlobalData = await fetchDailyGlobalData();
    setDailyData(dailyGlobalData);
    // console.log(dailyGlobalData)
  }

  const getContinentData = async () => {
  const continentsData = await fetchContinentData();
    setTotalData (continentsData);
    // console.log(continentsData)
  }



  getTotalStats();
  getCountriesNames();
  getDailyGlobalData();
  getContinentData();
  
},[] );


const handleChange = async (country) => {
  const getData = await fetchData(country);
  // console.log(getData);
  setState(getData);


  const getDailyCountryData = await fetchDailyCountryData(country);
  setDailyData(getDailyCountryData);
  // console.log(getDailyCountryData);

  const barChartData=[];
  barChartData.push({
    name: country,
    cases: getData.confirmed,
    deaths: getData.deaths,
    recovered: getData.recovered,
    title: country
  })
  const barChartDataContinent = await fetchContinentData();


  setTotalData ((!country)?barChartDataContinent:barChartData);

}





// const {data, country} = state;




  return (
    <div className="App">
      <img src={coronaimage} alt="Covid-19" className="App-logo"/>
      <Cards data={state} />
      <CountryNav countriesNameList={countryNames} handleChange={handleChange}/>
      <Chart dailyData={dailyData} totalData={totalData}/>
      <h1>Stay Home Stay Safe</h1>
    </div>
  );
}

export default App;
