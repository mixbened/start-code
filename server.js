const express = require('express');
const enforce = require('express-sslify');
const serveStatic = require("serve-static");
const history = require('connect-history-api-fallback');


const port = process.env.PORT || 80;
const path = require('path');
const app = express();

app.use(history())
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(serveStatic(path.join(__dirname, 'dist')));

app.listen(port);