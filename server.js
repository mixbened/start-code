const express = require('express');
const enforce = require('express-sslify');
const serveStatic = require("serve-static");
const path = require('path');
const app = express();
app.use(enforce.HTTPS());
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);