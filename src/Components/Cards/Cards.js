import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

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

export function Cards() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Card className={classes.card_infected}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Infected
                    </Typography>
                    <Typography variant="h4" component="h2">
                        <CountUp start={0} end={100000} duration={2} separator="," />
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {new Date().toDateString()}
                    </Typography>
                    <Typography className={classes.pos} >
                        Number of active cases of COVID-19
                    </Typography>
                </CardContent>
            </Card>

            <Card className={classes.card_recovered}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Recovered
                    </Typography>
                    <Typography variant="h4" component="h2">
                        <CountUp start={0} end={60000} duration={2} separator="," />
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {new Date().toDateString()}
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
                        <CountUp start={0} end={10000} duration={2} separator="," />
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {new Date().toDateString()}
                    </Typography>
                    <Typography className={classes.pos} >
                        Number of deaths caused by COVID-19
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
