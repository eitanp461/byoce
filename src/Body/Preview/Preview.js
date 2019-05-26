import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import { Video, Transformation, CloudinaryContext } from 'cloudinary-react';

const useStyles = makeStyles({
    fullWidth: {
        width: '100%',
    },
});

export default ({ startOffset, endOffset }) => {
    const classes = useStyles();
    return (
        <CloudinaryContext cloudName="demo">
            <div>
                <Video publicId="dog" controls className={classes.fullWidth} />
            </div>
        </CloudinaryContext>
    );
};
