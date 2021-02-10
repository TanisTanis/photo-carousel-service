require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
// const { getPhotos } = require('../database/index.js');
// const { Item, Photo, sequelize } = require('../database/data');
const pool = require('./pool');

const app = express();
const PORT = process.env.PORT || 3003;
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

app.use(compression());
app.use(cors());
app.use(express.json());

app.use('/', (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(`HTTP ${req.method} received on ${req.path}`);
  next();
});

app.use(express.static(PUBLIC_DIR));

app.get('/api/home/:id/photos', (req, res) => {
  const { id } = req.params;
  pool.query(`SELECT * FROM photos WHERE photoid=${id}`)
    .then((data) => {
      const response = [{
        listingId: id,
        photos: data.rows
      }];
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.send(500);
    });

});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${PORT}`);
});
