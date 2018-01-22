import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const PORT = 8888;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', (req, res) => {
  // Static dataset
  res.json([
    { 'id': 1, 'firstName': 'John', 'lastName': 'Smith', 'email': 'john_smith@example.com' },
    { 'id': 2, 'firstName': 'Kate', 'lastName': 'Jones', 'email': 'kate.jones@example.com' },
    { 'id': 3, 'firstName': 'Andrew', 'lastName': 'Pike', 'email': 'apike1981@example.com' },
    { 'id': 4, 'firstName': 'Margot', 'lastName': 'Robins', 'email': 'margie1@example.com' }
  ]);
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('err', err);
  } else {
    open('http://localhost:' + PORT);
  }
});