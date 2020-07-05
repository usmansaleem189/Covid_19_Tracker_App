import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

// import {fetchTotalStats} from '../../api/api'

const useStyles = makeStyles({

    container: {
        display: 'flex',
        justifyContent: 'center',
        margin: '50px 0'

    },
    card_infected: {
        minWidth: 275,
        margin: '0 2%',
        textAlign: 'center',
        borderBottom: 'double red',
    },
    card_recovered: {
        minWidth: 275,
        margin: '0 2%',
        textAlign: 'center',
        borderBottom: 'double green'
    },
    card_deaths: {
        minWidth: 275,
        margin: '0 2%',
        textAlign: 'center',
        borderBottom: 'double black'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export function Cards({data:{confirmed,recovered, deaths, lastUpdate}}) {
    
    
    const classes = useStyles();



    // const [dailyGlobalData, setDailyGlobalData] = useState([{}]);

    // useEffect(() => {
    //     async function getDailyGlobalData(){
    //         const response = await fetch("https://covid19.mathdro.id/api/daily");
    //         let data = await response.json();
    //         // console.log(data);
    //         setDailyGlobalData(data);
    //     }
    //     getDailyGlobalData();
    // }, [])

    // const [totalData, setTotalData] = useState({confirmed:{}, recovered:{}, deaths:{}, lastUpdate:{}});

    // useEffect(() => {
    //     async function getTotalStats() {
    //         const totalstats = await fetchTotalStats();
    //         // const data = await response.json();
    //         // console.log(Object.values(data));
    //         setTotalData({data: totalstats});
    //         // console.log(totalstats.confirmed.value)
    //     }
    //     getTotalStats();
    // }, []);

    // const {confirmed, recovered, deaths, lastUpdate} = totalData;
    // console.log(confirmed.value);

    if (!confirmed) {
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className={classes.container}>
            
            {/* {console.log(confirmed.value)};
            {console.log(recovered.value)};
            {console.log(deaths.value)};
            {console.log(lastUpdate)}; */}

            <Card className={classes.card_infected}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Infected
                    </Typography>
                    <Typography variant="h4" component="h2">
                        <CountUp start={0} end={confirmed.value} duration={2} separator="," />
                        {/* {totalData.confirmed.value} */}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography className={classes.pos} >
                        Number of active cases of COVID-19
                    </Typography>
                </CardContent>
            </Card>
            {/* {console.log(confirmed.value)} */}
            <Card className={classes.card_recovered}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Recovered
                    </Typography>
                    <Typography variant="h4" component="h2">
                        <CountUp start={0} end={recovered.value} duration={2} separator="," />
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography className={classes.pos} >
                        Number of recoveries from COVID-19
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.card_deaths}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Deaths
                    </Typography>
                    <Typography variant="h4" component="h2">
                        <CountUp start={0} end={deaths.value} duration={2} separator="," />
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography className={classes.pos} >
                        Number of deaths caused by COVID-19
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
