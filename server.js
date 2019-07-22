
const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const {commentRouter} = require('./routes/commentRouter');
const eateries = require('./routes/eateryRouter');
<<<<<<< HEAD
const {userRouter} = require('./routes/userRouter');
=======
const users = require('./routes/userRouter')
>>>>>>> master

const app = express();
app.use(cors());
app.get("/", (req, res) => res.json({ msg: 'ok' }))

app.use(logger('dev'));
app.use(bodyParser.json());


app.use('/users', userRouter);
app.use('/comments', commentRouter);
app.use('/eateries', eateries)

app.listen(PORT, () => {
  console.log(`WeedleyDee this server's for me ${PORT}`);
});


