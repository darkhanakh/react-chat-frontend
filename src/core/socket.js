import io from 'socket.io-client';

const socket = io(window.location.origin.replace('3000', '9999'));

export default socket;
