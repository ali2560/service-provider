const express = require("express");
const axios = require("axios");
const cors = require('cors');

const app = express();

const router = require('./controlles/index')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(cors())

app.use('/', router)

app.listen(4002, () => console.log("app is listening on port 4002"));



