const express = require('express');
const app = express();
const bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

/*
 *  Job Router
 */
app.use('/jobs', require('./job_router'));

/*
 *  Company Router
 */
app.use('/companies', require('./company_router'));

/*
 *  Scrape
 */
app.use('/scrape', function(req, res) {
        const scraper = require('./scraper');
        const url = "https://remixjobs.com";
        scraper(url);
        res.send("scrape succeed!");
});

var server = app.listen(3000, function () {
                const host = server.address().address;
                const port = server.address().port;
                console.log('App is listening at http://%s:%s', host, port);
});