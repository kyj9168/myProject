const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const configfile = require('../.config/config.json');
const runmode = configfile.runmode;
const config = configfile[runmode];
const basicAuth = require('express-basic-auth');
const moment = require('moment');

const MobileDetect = require('mobile-detect');
// const indexRouter = require('./routes/index');
const port = config.EXPRESS_PORT;
const getIp = (req) => {
    return req.headers['x-forwarded-for']?.split(',').shift() || req.socket?.remoteAddress;
};
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

// app.use(basicAuth({
//   users: { 'admin': 'admin123!' },
//   challenge: true
// }))
// app.use( indexRouter);
// app.use( express.static(path.resolve(__dirname, '../build')));
// app.use( express.static(path.resolve(__dirname, '../public')));

// Serve static assets

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
    let md = new MobileDetect(req.headers['user-agent']);
    console.log(
        `TIME:[${moment().format('yyyy-HH-mm hh:mm:ss')} ] IP:[${getIp(
            req
        )}] BROWSER:[${md.userAgent()}] OS:[${md.os()}] PHONE:[${md.mobile()}]`
    );
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(port, function () {
    console.log(`listening on port ${port}!`);
});
