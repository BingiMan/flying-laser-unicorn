const jwt = require('jsonwebtoken');

const SECRET = "WHOYOUCALLINPINHEAD?";



const genToken = (payload) => {
  return jwt.sign(payload, SECRET);
}

const restrict = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, SECRET);
    res.locals.user = user;
    next();
  } catch (e) {
    console.log(e.message)
    res.status(401).send('Not Authorized');
  }
}


const ownership = (req, res, next) => {
  try {
    // const token = req.headers.authorization.split(" ")[1];
    const id = req.headers.user

    res.locals.user = user
    next();

  } catch (e) {
    console.log(e.message)
    res.status(401).send('Not Authorized');
  }
}

// ownership()
module.exports = { genToken, restrict, ownership };