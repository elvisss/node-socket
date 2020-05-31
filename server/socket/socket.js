const { io } = require('../server');

io.on('connection', (client) => {
  console.log('User connected');

  client.emit('sendMessage', {
    user: 'Admin',
    message: 'Welcome to the App'
  });

  client.on('disconnect', () => {
    console.log('User disconnected');
  });

  // Listen client
  client.on('sendMessage', (data, cb) => {
    console.log(data);

    client.broadcast.emit('sendMessage', data);

    /* if (data.user) {
      cb('OK');
    } else {
      cb('ERROR');
    } */
  });
});
