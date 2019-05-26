import React, { useEffect, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import initComm, { communicationContext } from './communication';
import { StateContext } from './state';
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
    const [state, dispatch] = useContext(StateContext);
    const classes = useStyles();
    const { send } = initComm({
        initHandler: data => {
            console.log('XXXXXXXXXXXXXXXX init', data);
            dispatch({ type: 'setAssets', payload: {
                assets: data.assets
                , cloudName: data.cloudName }});
        },
        messageHandler: data => {
            console.log('XXXXXXXXXXXXXXXX message', data);
        },
    });
    console.log('XXXXXXXXXXXXXX rerendering ', state);
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
                        <Body cloudName={state.cloudName} />
                    </Grid>
                </Grid>
            </communicationContext.Provider>
        </Box>
    );
}

export default App;
