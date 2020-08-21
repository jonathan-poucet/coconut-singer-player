var express = require('express');
var router = express.Router();
const UsersModel = require('../models/Users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/all", async (req, res, next) => {
  try {
    const users = await UsersModel.find()
    res.json(users)
  } catch (err) {
    next(err)
  }
});

module.exports = router;
