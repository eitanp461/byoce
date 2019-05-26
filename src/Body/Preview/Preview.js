import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import { StateContext } from '../../state';

const useStyles = makeStyles({
    fullWidth: {
        width: '100%',
    },
});

export default ({ startOffset, endOffset }) => {
    const [{ cloudName, publicId }, dispatch] = useContext(StateContext)

    const classes = useStyles();
    return (
        <CloudinaryContext cloudName={cloudName}>
            <Video publicId={publicId} controls className={classes.fullWidth} />
        </CloudinaryContext>
    );
};
