let socket = io();

socket.on('connect', () => {
  console.log('Conectado al servidor');
});

socket.on('disconnect', () => {
  console.log('Lost connection');
});

socket.emit(
  'sendMessage',
  {
    user: 'Elvis',
    message: 'Hello World'
  },
  (res) => {
    console.log('callback triggered', res);
  }
);

socket.on('sendMessage', (data) => {
  console.log('servidor', data);
});
