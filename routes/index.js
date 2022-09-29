var express = require('express');
var router = express.Router();
const knex = require('knex');
require('dotenv').config();

const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  },
});

router.get('/company-list', (req, res) => {
  db.select('*')
    .from('company')
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/add-company', (req, res) => {
  const { cin, name } = req.body;
  db('company')
    .insert({
      cin: cin,
      name: name,
    })
    .then(() => {
      console.log('Company Added');
      return res.json({ cin,name });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
