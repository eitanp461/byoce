import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { communicationContext } from '../communication';

export default () => {
    return (
        <AppBar position="static" color="default">
            <communicationContext.Consumer>
                {value => (
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Cloudinary Video Producer
                        </Typography>
                        <button onClick={() => value.send({ type: 'done' })}>
                            Done
                        </button>
                    </Toolbar>
                )}
            </communicationContext.Consumer>
        </AppBar>
    );
};
