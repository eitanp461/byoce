import React, { useContext } from 'react';
import { Cloudinary } from 'cloudinary-core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { communicationContext } from '../communication';
import { StateContext } from '../state';

export default () => {
    const [state, dispatch] = useContext(StateContext);
    const value = useContext(communicationContext);

    const generateUrl = () => {
        var cl = Cloudinary.new({
            cloud_name: state.cloudName,
            secure_distribution: 'res-dev.cloudinary.com',
        });
        return cl.url(state.publicId, {
            resource_type: 'video',
            startOffset: state.startOffset,
            endOffset: state.endOffset,
        });
    };

    const close = () => value.send({ type: 'done' });
    const doSubmit = () => {
        fetch(
            `https://api-dev.cloudinary.com/v1_1/${
                state.cloudName
            }/video/upload`,
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // no-referrer, *client
                body: JSON.stringify({
                    file: generateUrl(),
                    upload_preset: state.uploadPreset,
                    api_key: state.apiKey,
                }), // body data type must match "Content-Type" header
            }
        );
    };
    const submit = () => {
        doSubmit();
        close();
    };
    return (
        <AppBar position="static" color="default">
            <Toolbar
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant="h6" color="inherit">
                    Cloudinary Video Producer
                </Typography>
                <div>
                    <Button
                        style={{ margin: '10px' }}
                        onClick={close}
                        variant="contained"
                        color="secondary"
                    >
                        Close
                    </Button>
                    <Button
                        style={{ margin: '10px' }}
                        onClick={submit}
                        variant="contained"
                        color="primary"
                    >
                        Done
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};
