const express = require('express');
const enforce = require('express-sslify');
const serveStatic = require("serve-static");
const path = require('path');
const app = express();
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);
app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'dist')); 
})