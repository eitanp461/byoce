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
    const initialState = {
        cloudName: 'demo',
        publicId: 'dog',
        cropHandlePreviewOffset: 0,
        startOffset: 0,
        endOffset: 100,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'changeCropPreviewOffset':
                return {
                    ...state,
                    cropHandlePreviewOffset: action.offset,
                };

            default:
                return state;
        }
    };

    const classes = useStyles();
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <CloudinaryContext
                cloudName={initialState.cloudName}
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
        </StateProvider>
    );
};
