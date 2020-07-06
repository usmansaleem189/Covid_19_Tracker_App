import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Line } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';


const useStyles = makeStyles({
    chartContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
        width: '80%',
        // backgroundColor: 'blue'
    },
    chart: {
        width: '90%',
        // backgroundColor: 'green',
        margin: '10px 0'
    },
    Container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});



// const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//         {
//             label: "First dataset",
//             data: [33, 53, 85, 41, 44, 65],
//             fill: true,
//             backgroundColor: "rgba(75,192,192,0.2)",
//             borderColor: "rgba(75,192,192,1)"
//         },
//         {
//             label: "Second dataset",
//             data: [33, 25, 35, 51, 54, 76],
//             fill: false,
//             borderColor: "#742774"
//         }
//     ]
// };

// const state = {
//     labels: ['January', 'February', 'March', 'April', 'May'],

//     datasets: [
//         {
//             label: 'Rainfall',
//             backgroundColor: 'rgba(75,192,192,1)',
//             borderColor: 'rgba(0,0,0,1)',
//             borderWidth: 2,
//             data: [65, 59, 80, 81, 56]
//         }
//     ]
// }

export function Chart({dailyData, totalData}) {
    const classes = useStyles();
    // console.log(dailyGlobalData);
    // console.log(continentsArray);


    const data = {
        labels: dailyData.map((data)=> data.lastUpdate),
        datasets: [
            {
                label: "Confirmed",
                data: dailyData.map((data)=> data.confirmed),
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Deaths",
                data: dailyData.map((data)=> data.deaths),
                fill: false,
                borderColor: "#742774"
            }
        ]
    };



    const barData = {
        labels: totalData.map((data)=> data.name),
    
        datasets: [
            {
                label: 'Cases',
                backgroundColor: 'lightblue',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: totalData.map((data)=> data.cases)
            },
            {
                label: 'Recovered',
                backgroundColor: 'lightgreen',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: totalData.map((data)=> data.recovered)
            },
            {
                label: 'Deaths',
                backgroundColor: 'lightred',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: totalData.map((data)=> data.deaths)
            }
        ]
    }



    return (
        <div className={classes.Container}>
            <div className={classes.chartContainer}>
                <div className={classes.chart}>
                    <Line data={data} />
                </div>
                <div className={classes.chart}>
                    <Bar data={barData}
                        options={{
                            title: {
                                display: true,
                                text: 'Covid-19 Statistics for each Continent',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
