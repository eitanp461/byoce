import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import initComm, { communicationContext } from './communication';
import Header from './Header/Header.js';
import Body from './Body/Body.js';
import './App.css';

const useStyles = makeStyles({
    fullHeight: {
        height: '100%',
    },
    flexGrow: {
        flex: 1,
    },
});

function App() {
    const classes = useStyles();
    const { send } = initComm(data => {
        console.log('XXXXXXXXXXXXXXXX', data);
    });

    return (
        <Box height="100%">
            <communicationContext.Provider value={{ send }}>
                <Grid
                    wrap="nowrap"
                    direction="column"
                    container
                    className={(classes.flexGrow, classes.fullHeight)}
                >
                    <Grid item>
                        <Header />
                    </Grid>

                    <Grid item className={classes.flexGrow}>
                        <Body />
                    </Grid>
                </Grid>
            </communicationContext.Provider>
        </Box>
    );
}

export default App;
