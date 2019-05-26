import { createContext } from 'react';

export const communicationContext = createContext({ send: null });
let target;

const initializeCommunication = ({ initHandler, messageHandler }) => {
    console.log('XXXXXXX initialize comm ');

    const handleMessages = event => {
        console.log('XXXXXXX handling message from host ', event);
        const data = event.data;
        if (data.type === '__hello') {
            console.log('XXXXXXX recieved target from host: ', data.domain);
            initHandler(data);
            target = data.domain;
        } else {
            console.log('XXXXXXX delegating to messageHandler');
            messageHandler(data);
        }
    };

    window.addEventListener('message', handleMessages, false);

    const send = data => {
        console.log('XXXXXXX send()', data);
        if (target) {
            console.log('XXXXXXX sending message to parent: ', data);
            window.parent.postMessage(JSON.stringify(data), target);
        } else {
            console.log('XXXXXXX target is not defined yet');
        }
    };

    return {
        send,
    };
};

export default initializeCommunication;
