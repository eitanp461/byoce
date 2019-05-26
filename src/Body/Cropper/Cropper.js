import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { Video, Transformation, CloudinaryContext } from 'cloudinary-react';
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
    const [
        {
            cloudName,
            publicId,
            cropHandlePreviewOffset,
            startOffset,
            endOffset,
        },
        dispatch,
    ] = useContext(StateContext);

    const classes = useStyles();
    return (
        <Grid
            container
            wrap="nowrap"
            direction="column"
            className={(classes.fullHeight, classes.imageWrapper)}
        >
            <Video
                publicId={publicId}
                className={classes.maxWidth}
                controls
                poster={{
                    startOffset: `${cropHandlePreviewOffset}p`,
                }}
            >
                <Transformation
                    startOffset={startOffset}
                    endOffset={endOffset}
                />
            </Video>
            <Slider />
        </Grid>
    );
};
