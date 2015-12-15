const express = require('express');
const app = express();
const bodyParser  = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

/*
 *  Main Route Logics
 */
app.use('/jobs', require('./router'));
app.use('/companies', require('./companies'));
app.use('/scrape', function(req, res) {
        const scraper = require('./scraper');
        const url = "https://remixjobs.com/?page=31&in=all";
        scraper(url);
        res.send("scrape succeed!");
});

var server = app.listen(3000, function () {
                const host = server.address().address;
                const port = server.address().port;
                console.log('App is listening at http://%s:%s', host, port);
});