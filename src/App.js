import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import Header from './Header/Header.js';
import Body from './Body/Body.js';
import './App.css';

const useStyles = makeStyles({
    fullHeight: {
        height: '100%',
    },
    flexGrow: {
        flex: 1,
    }
});

function App() {
    const classes = useStyles();
    return (
        <Box height="100%">
            <Grid
                wrap="nowrap"
                direction="column"
                container
                className={classes.flexGrow, classes.fullHeight}
            >
                <Grid item>
                    <Header />
                </Grid>

                <Grid
                    item
                    className={classes.flexGrow}
                    >
                    <Body />
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
