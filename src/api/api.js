import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

// ALL Countries **********
// https://corona.lmao.ninja/v2/countries?yesterday&sort

// ALL Continents
// https://corona.lmao.ninja/v2/continents?yesterday=true&sort

// ALL Countries - last 100/all days ********8
// https://corona.lmao.ninja/v2/historical?lastdays=100

// Daily Data
// https://covid19.mathdro.id/api/daily






export const fetchDailyGlobalData = async () => {
    try {
        const response = await fetch("https://covid19.mathdro.id/api/daily");
        let data = await response.json();

        let modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.totalConfirmed,
            // recovered: dailyData.totalRecovered,
            deaths: dailyData.deaths.total,
            lastUpdate: dailyData.reportDate

        }))
        // console.log(modifiedData);
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchTotalStats = async () => {
    try {
        // const {data} = await axios.get("https://covid19.mathdro.id/api");
        // console.log(data.confirmed);

        const response = await fetch("https://covid19.mathdro.id/api");
        let data = await response.json();
        // console.log(data);

        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate
        }

        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}


// export const fetchCountriesName = async () => {
//     try {
//         // const {data: {countries}} = await axios.get("https://covid19.mathdro.id/api/countries");
//         const response = await fetch("https://covid19.mathdro.id/api/countries");
//         let {countries: list} = await response.json();

//         let countries_list = list.map(country => country.name);
//         // console.log(list);
//         // console.log(countries_list);
//         return countries_list;
//     } catch (error) {
//         console.log(error);
//     }
// }


export const fetchCountriesName = async () => {
    try {
        // const {data: {countries}} = await axios.get("https://covid19.mathdro.id/api/countries");
        const response = await fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort");
        let data = await response.json();

        let modifiedData = data.map(country => country.country);
        // console.log(modifiedData);
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}



export const fetchData = async (country) => {

try {
    const response = await fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort");
    let data = await response.json();
    // console.log(data);
    // console.log(country);
    const filteredData = data.filter((obj)=>(obj.country === country));
    const requiredData = {
        confirmed: filteredData[0].cases,
        recovered: filteredData[0].recovered,
        deaths: filteredData[0].deaths,
        lastUpdate: filteredData[0].updated
    }
return requiredData;
} catch (error) {
    
}


}











export const fetchContinentData = async () => {
    try {
        // const { data } = await axios.get(`https://corona.lmao.ninja/v2/continents?yesterday=true&sort`);
        const response = await fetch("https://corona.lmao.ninja/v2/continents?yesterday=true&sort");
        let data = await response.json();
        const modifiedData = data.map((continent) => ({
            name: continent.continent,
            cases: continent.cases,
            deaths: continent.deaths,
            recovered: continent.recovered
        }))
        // console.log(modifiedData);
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}