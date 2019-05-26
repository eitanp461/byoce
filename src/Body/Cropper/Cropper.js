import React, { useContext, useEffect, useState } from 'react';
import cx from 'classnames';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { Image, Video, Transformation } from 'cloudinary-react';
import Slider from '../Slider/Slider';
import { StateContext } from '../../state';

const VIDEO_ID = 'cropper-video';

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
    displayNone: {
        display: 'none',
    },
});

let width = null;
let height = null;

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

    useEffect(() => {
        return function componentWillUnmount() {
            const video = document.getElementById(VIDEO_ID);
            if (video && video.videoWidth) {
                console.log({ width, height });
                width = video.clientWidth;
                height = video.clientHeight;
            }
        };
    });

    const [isLoading, setIsLoading] = useState(false);

    const classes = useStyles();
    return (
        <Grid
            container
            wrap="nowrap"
            direction="column"
            className={(classes.fullHeight, classes.imageWrapper)}
        >
            <div
                className={cx({
                    [classes.displayNone]: !isLoading,
                })}
                style={{ width, height }}
            >
                <Image
                    publicId="pixel"
                    cloudName="eitanpeer"
                    width={width}
                    height={height}
                />
            </div>
            <Video
                // Update the key to force React to reload the new video
                key={`${startOffset}-${endOffset}`}
                id={VIDEO_ID}
                publicId={publicId}
                className={cx(classes.maxWidth, {
                    [classes.displayNone]: isLoading,
                })}
                startOffset={startOffset}
                endOffset={endOffset}
                controls
                poster={{
                    startOffset: `${cropHandlePreviewOffset}`,
                }}
                onLoadStart={() => {
                    console.log('onLoadStart');
                    setIsLoading(true);
                }}
                onCanPlay={() => {
                    console.log('onCanPlay');
                    setIsLoading(false);
                }}
            />
            <Slider />
        </Grid>
    );
};
