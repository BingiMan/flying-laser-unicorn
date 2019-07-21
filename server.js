
const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const comments = require('./routes/commentRouter');
const eateries = require('./routes/eateryRouter');
const users = require('./routes/usersRouter')

const app = express();
app.use(cors());
app.get("/", (req, res) => res.json({ msg: 'ok' }))

app.use(logger('dev'));
app.use(bodyParser.json());


app.use('/users', users);
app.use('/comments', comments);
app.use('eateries', eateries)

app.listen(PORT, () => {
  console.log(`WeedleyDee this server's for me ${PORT}`);
});


