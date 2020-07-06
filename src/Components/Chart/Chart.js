import React from "react";
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/core/styles';
import { Line } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';
import '../../App.css';

// const useStyles = makeStyles({
//     chartContainer: {
//         display: 'flex',
//         justifyContent: 'space-around',
//         marginTop: '50px',
//         width: '90%',
//     },
//     chart: {
//         width: '45%',
//         margin: '10px 0',
//     },
//     Container: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });



export function Chart({ dailyData, totalData }) {
    // const classes = useStyles();
    // console.log(dailyGlobalData);
    // console.log(continentsArray);


    const data = {
        labels: dailyData.map((data) => data.lastUpdate),
        datasets: [
            {
                label: "Confirmed",
                data: dailyData.map((data) => data.confirmed),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Deaths",
                data: dailyData.map((data) => data.deaths),
                fill: false,
                borderColor: "#742774"
            }
        ]
    };



    const barData = {
        labels: totalData.map((data) => data.name),

        datasets: [
            {
                label: 'Cases',
                backgroundColor: 'lightblue',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: totalData.map((data) => data.cases)
            },
            {
                label: 'Recovered',
                backgroundColor: 'lightgreen',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: totalData.map((data) => data.recovered)
            },
            {
                label: 'Deaths',
                backgroundColor: 'lightred',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: totalData.map((data) => data.deaths)
            }
        ]
    }

// console.log(dailyData);

    if (!dailyData[0] || (!totalData[0]))
    {
        return null;
    }

    return (
        <div className="Chart-Container">
            <div className="Chart-chartContainer">
                <div className="Chart-chart">
                    <Line data={data}
                        options={{
                            title: {
                                display: true,
                                text:  `${dailyData[0].name}: Daily Data `,
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'top',
                            }
                        }}
                    />
                </div>
                <div className="Chart-chart">
                    <Bar data={barData}
                        options={{
                            title: {
                                display: true,
                                text: `Covid-19 Statistics for ${totalData[0].title}`,
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'top'
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
