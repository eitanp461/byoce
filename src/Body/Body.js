import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { CloudinaryContext } from 'cloudinary-react';
import { StateProvider } from '../state';
import SingleLineGridList from './SingleLineGridList/SingleLineGridList.js';
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

export default props => {
    const classes = useStyles();
    return (
        <CloudinaryContext
            cloudName={props.cloudName}
            className={classes.imageWrapper}
            secure
        >
            <Grid
                container
                wrap="nowrap"
                direction="column"
                className={classes.fullHeight}
            >
                <Grid
                    container
                    alignItems="center"
                    className={classes.fullHeight}
                >
                    <Box flex={1} border={1}>
                        <Cropper />
                    </Box>
                </Grid>
                <SingleLineGridList />
            </Grid>
        </CloudinaryContext>
    );
};
