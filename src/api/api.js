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
            lastUpdate: dailyData.reportDate,
            name: "Global"

        }))
        console.log(modifiedData[0].name);
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
            confirmed: data.confirmed.value,
            recovered: data.recovered.value,
            deaths: data.deaths.value,
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

        const response1 = await fetch("https://pomber.github.io/covid19/timeseries.json");
        let data1 = await response1.json();

        let modifiedData = data.map(country => country.country);
        const filteredModifiedData = modifiedData.filter((name) => Object.keys(data1).includes(name));
        // console.log(modifiedData);
        // console.log(filteredModifiedData);
        // return modifiedData;
        return filteredModifiedData;

    } catch (error) {
        console.log(error);
    }
}



export const fetchData = async (country) => {

    try {

        if (!country) {
            return fetchTotalStats();
            // return fetchContinentData();
        }

        const response = await fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort");
        let data = await response.json();
        // console.log(data);
        // console.log(country);
        const filteredData = data.filter((obj) => (obj.country === country));
        const requiredData = {
            confirmed: filteredData[0].cases,
            recovered: filteredData[0].recovered,
            deaths: filteredData[0].deaths,
            lastUpdate: filteredData[0].updated
        }
        // console.log(requiredData);
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
            recovered: continent.recovered,
            title: "All Continents"
        }))
        // console.log(modifiedData);
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}


// export const fetchDailyCountryData = async (country) => {
    
//     try {

//         if (!country) {
//             return fetchDailyGlobalData();
//         }

//         const response = await fetch("https://corona.lmao.ninja/v2/historical?lastdays=all");
//         let data = await response.json();

//         const filteredData = data.filter((data) => data.country === country)
//         // console.log(filteredData)


//         const dateArray = Object.keys(filteredData[0].timeline.cases);
//         const casesArray = Object.values(filteredData[0].timeline.cases);
//         const deathsArray = Object.values(filteredData[0].timeline.deaths);

//         const modifiedData = [];

//         var i;

//         for (i = 0; i < dateArray.length; i++)
//             modifiedData.push({
//                 confirmed: casesArray[i],
//                 deaths: deathsArray[i],
//                 lastUpdate: dateArray[i]
//             })

//         // console.log(data);
//         return modifiedData;
//     } catch (error) {
//         console.log(error);
//     }
// }




export const fetchDailyCountryData = async (country) => {
    
    try {

        if (!country) {
            return fetchDailyGlobalData();
        }


        const response1 = await fetch("https://pomber.github.io/covid19/timeseries.json");
        let data1 = await response1.json();
        const countryData = (data1[country]);
        const modifiedData1 = countryData.map(obj => ({
            confirmed: obj.confirmed,
            deaths: obj.deaths,
            lastUpdate: obj.date,
            name: country
        }))
        // console.log(Object.keys(data1));
        console.log(modifiedData1[0].name);
        return modifiedData1;

        // const response = await fetch("https://corona.lmao.ninja/v2/historical?lastdays=all");
        // let data = await response.json();
        // const filteredData = data.filter((data) => data.country === country)

        // const dateArray = Object.keys(filteredData[0].timeline.cases);
        // const casesArray = Object.values(filteredData[0].timeline.cases);
        // const deathsArray = Object.values(filteredData[0].timeline.deaths);

        // const modifiedData = [];

        // var i;

        // for (i = 0; i < dateArray.length; i++)
        //     modifiedData.push({
        //         confirmed: casesArray[i],
        //         deaths: deathsArray[i],
        //         lastUpdate: dateArray[i]
        //     })

        // return modifiedData;
    } catch (error) {
        console.log(error);
    }
}