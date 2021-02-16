// /* eslint-disable no-console */
// const express = require('express');

// const app = express();
// app.get('/', (req, res) => res.send('Hello World!'));
// app.listen(3000, () => console.log('Example app listening on port 3000!'));

/* eslint-disable no-console */
const express = require('express');
const hello = require('./hello');
const handleListen = require('./handleListen');

const PORT = 3000;
const app = express();

app.get('/', hello);
app.listen(3000, handleListen(console.log, PORT));
