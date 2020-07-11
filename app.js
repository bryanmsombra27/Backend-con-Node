const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const bodyParser = require("body-parser");
const helmet = require("helmet");

const app = express();
const testRoutes = require('./routes/routes');

app.use(helmet());

//body parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json({
    limit: "10kb"
}));

//sanitizacion contra ataques NoSQL
app.use(mongoSanitize());

//sanitizacion contra ataques XSS
app.use(xss());

app.use(testRoutes);

module.exports = app;