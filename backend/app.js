const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const connection = require('./mysqlConf').connection;

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.post('/register', (req, res) => {
  const data = req.body;
  connection.query('INSERT INTO Users SET ?', data, (err, results) => {
    if (err) {
      // If an error has occurred, then the user is informed of the error
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(403).send(err.sqlMessage);
      } else {
        res.status(400).send('Error registering a user');
      }
    } else {
      // If everything went well, we send a status "ok".
      res.sendStatus(200);
    }
  });
});

app.listen(port, () => console.log(`OneTool api listening on ${port}!`));
