import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import '../../App.css';

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
        borderBottom: 'solid 10px red',
        '@media (max-width: 600px)' : {
            minWidth: '100%'
          }
    },
    card_recovered: {
        minWidth: 275,
        margin: '0 2%',
        textAlign: 'center',
        borderBottom: 'solid 10px green'
    },
    card_deaths: {
        minWidth: 275,
        margin: '0 2%',
        textAlign: 'center',
        borderBottom: 'solid 10px black'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

    // '@media (max-width: 780px)' : {
    //     container: {
    //     width: '10%'
    // }
    //   }

});

export function Cards({data}) {
    
    
    // const classes = useStyles();



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

    if (!data.confirmed) {
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className="Cards-container">
            
            {/* {console.log(confirmed.value)};
            {console.log(recovered.value)};
            {console.log(deaths.value)};
            {console.log(lastUpdate)}; */}

            <Card className="Cards-card_infected">
                <CardContent>
                    <Typography className="Cards-title" color="textSecondary" gutterBottom>
                        Infected
                    </Typography>
                    <Typography variant="h4" component="h2">
                        <CountUp start={0} end={data.confirmed} duration={2} separator="," />
                        {/* {totalData.confirmed.value} */}
                    </Typography>
                    <Typography className="Cards-pos" color="textSecondary">
                    {new Date(data.lastUpdate).toDateString()}
                    </Typography>
                    <Typography className="Cards-pos" >
                        Number of active cases of COVID-19
                    </Typography>
                </CardContent>
            </Card>
            {/* {console.log(confirmed.value)} */}
            <Card className="Cards-card_recovered">
                <CardContent>
                    <Typography className="Cards-title" color="textSecondary" gutterBottom>
                        Recovered
                    </Typography>
                    <Typography variant="h4" component="h2">
                        <CountUp start={0} end={data.recovered} duration={2} separator="," />
                    </Typography>
                    <Typography className="Cards-pos" color="textSecondary">
                    {new Date(data.lastUpdate).toDateString()}
                    </Typography>
                    <Typography className="Cards-pos" >
                        Number of recoveries from COVID-19
                    </Typography>
                </CardContent>
            </Card>

            <Card className="Cards-card_deaths">
                <CardContent>
                    <Typography className="Cards-title" color="textSecondary" gutterBottom>
                        Deaths
                    </Typography>
                    <Typography variant="h4" component="h2">
                        <CountUp start={0} end={data.deaths} duration={2} separator="," />
                    </Typography>
                    <Typography className="Cards-pos" color="textSecondary">
                        {new Date(data.lastUpdate).toDateString()}
                    </Typography>
                    <Typography className="Cards-pos" >
                        Number of deaths caused by COVID-19
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
