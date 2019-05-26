import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import Slider from '../Slider/Slider';
import { StateContext } from '../../state';

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
    const [{ cloudName, publicId, cropHandlePreviewOffset }, dispatch] = useContext(StateContext)

    const classes = useStyles();
    return (
        <Grid
            container
            wrap="nowrap"
            direction="column"
            className={(classes.fullHeight, classes.imageWrapper)}
        >
            <CloudinaryContext
                cloudName={cloudName}
                className={classes.imageWrapper}
            >
                <Image publicId={publicId} className={classes.maxWidth}>
                    <Transformation startOffset={cropHandlePreviewOffset}></Transformation>
                    </Image>
            </CloudinaryContext>
            <Slider />
        </Grid>
    );
};
