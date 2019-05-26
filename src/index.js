import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './state';

const initialState = {
    cloudName: 'demo',
    publicId: 'dog',
    cropHandlePreviewOffset: 0,
    assets: [],
    startOffset: 0,
    endOffset: 100,
    currentId: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'changeCropPreviewOffset':
            return {
                ...state,
                cropHandlePreviewOffset: action.offset,
                startOffset: action.startOffset,
                endOffset: action.endOffset,
            };

        case 'setAssets':
            return {
                ...state,
                assets: action.payload.assets,
                cloudName: action.payload.cloudName,
                currentId: action.payload.assets.length ? action.payload.assets[0].public_id : null,
            };

        case 'setCurrent':
            return {
                ...state,
                currentId: action.payload,
            };

        default:
            return state;
    }
};

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
