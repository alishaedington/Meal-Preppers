const express = require('express');
const path = require('path');
const cors = require('cors');
const router = require('./routes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`hello, ports be pottin on ${PORT}`);
});
