require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(express.json({limit: '5mb'}));
app.use(cors());
app.use(routes);

app.listen(3000);