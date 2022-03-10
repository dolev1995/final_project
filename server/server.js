'use strict';
const
    path = require("path"),
    express = require('express'),
    router = require('./router'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    app = express();

// BASE SETUP
// ==============================================

// mongoose.Promise = require('q').Promise;
mongoose.connect("mongodb://localhost:27017/user_history", {useNewUrlParser: true}).then(() => console.log(("connected to mongoose")))
    .catch((err) => console.log(err));
app.use(function (req, res, next) {
    /* if (!config.trusted(req.headers.origin))
      return res.send(403) */

    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");

    next();
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ROUTES
// ==============================================

router(app, express);

// START THE SERVER
// ==============================================

app.listen(config.port, console.log(`Server is running...  Port: ${config.port}`));

process.on('uncaughtException', err => console.log(err))