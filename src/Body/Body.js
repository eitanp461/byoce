import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import SingleLineGridList from '../SingleLineGridList/SingleLineGridList.js';

const useStyles = makeStyles({
    fullHeight: {
        height: '100%',
    },
});

export default () => {
    const classes = useStyles();
    return (
    <Grid container wrap="nowrap" direction="column" className={classes.fullHeight}>
        <Grid item className={classes.fullHeight}>
            <Box flex={1}>Item 1</Box>
            </Grid>
            <Grid item >
        <SingleLineGridList />
        </Grid>
    </Grid>
)}
