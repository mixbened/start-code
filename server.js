const express = require('express');
const enforce = require('express-sslify');
const serveStatic = require("serve-static");
const history = require('connect-history-api-fallback');


const port = process.env.PORT || 80;
const path = require('path');
const app = express();

app.use(require('prerender-node').set('prerenderToken', 'WJP64Rq1rCml9y2dxirN'));
app.use(history())
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.get('/sitemap.xml', (req, res) => {
    res.set('Content-Type', 'application/xml');
    res.sendFile(path.join(__dirname, 'dist/sitemap.xml'))
})
app.use(serveStatic(path.join(__dirname, 'dist')));

app.listen(port);