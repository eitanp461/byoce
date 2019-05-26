import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import SingleLineGridList from './SingleLineGridList/SingleLineGridList.js';
import Preview from './Preview/Preview';
import Cropper from './Cropper/Cropper';

const useStyles = makeStyles({
    maxHeight: {
        maxHeight: '100%',
    },
    fullHeight: {
        height: '100%',
    },
    flex: {
        flex: 1,
    },
});

export default () => {
    const classes = useStyles();
    return (
        <Grid
            container
            wrap="nowrap"
            direction="column"
            className={classes.fullHeight}
        >
            <Grid container alignItems="center" className={classes.fullHeight}>
                <Box flex={1} border={1} >
                    <Cropper />
                </Box>
                <Box flex={1} border={1} >
                    <Preview className={classes.maxHeight}/>
                </Box>
            </Grid>
            {/* <Preview className={classes.maxHeight}/> */}
            <SingleLineGridList />
        </Grid>
    );
};
