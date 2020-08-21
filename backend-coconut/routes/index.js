var express = require('express');
var router = express.Router();
// require("dotenv").config();
// connection db
require("./config/mongo");

// config
server.use(express.static(__dirname + "/static"));
server.use(express.urlencoded({ extended: false }));
server.set("views", __dirname + "/views");
hbs.registerPartials(__dirname + "/views/partials"); // on indique à jade où chercher les vues-partielles
server.set("view engine", "jade");

/ DATA MODELS
const usersModel = require("./models/Users");
// fake db
const users = require("./data/users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

server.listen(process.env.PORT, () => {
  console.log(`ready @ http://localhost:${process.env.PORT}`);
});

module.exports = router;
