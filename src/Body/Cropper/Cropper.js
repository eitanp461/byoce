import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import Slider from '../Slider/Slider';

const useStyles = makeStyles({
    maxHeight: {
        maxHeight: '100%',
    },
    fullHeight: {
        height: '100%',
    },
    maxWidth: {
        maxWidth: '100%',
    },
    flex: {
        flex: 1,
    },
    imageWrapper: {
        padding: '10px',
    },
});

export default () => {
    const classes = useStyles();
    return (
        <Grid
            container
            wrap="nowrap"
            direction="column"
            className={(classes.fullHeight, classes.imageWrapper)}
        >
            <CloudinaryContext
                cloudName="demo"
                className={classes.imageWrapper}
            >
                <Image publicId="dog" className={classes.maxWidth} />
            </CloudinaryContext>
            <Slider />
        </Grid>
    );
};
