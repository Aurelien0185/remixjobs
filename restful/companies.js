/*  * * * * * * * * * * * * * * * * * * * * * * *
 *                                              *
 *  Document Description: router for companies  *
 *                                              *
 *  * * * * * * * * * * * * * * * * * * * * * * */

var express = require('express');
var app     = express();
var router  = express.Router();


/*
 * Get: Return all companies
 */
module.exports = router.get('/', function(req, res, next) {
                        const Jobs = require('./models/jobs');
                        Jobs.find().distinct('company', function(err, companies) {
                                   if (err) res.sendFile(__dirname + '/views' + '/error.html');
                                             else res.render('companyList',{ companies: companies});
                        });
});

/*
 * Get: Return all jobs of a given company
 */
module.exports = router.get('/*', function(req, res, next) {
                        const company = req.url.split('/')[1];
                        const Jobs = require('./models/jobs');
                        Jobs.find({'company': company }, function(err, jobs) {
                             if (err) res.sendFile(__dirname + '/views' + '/error.html');
                             else res.render('companies', { jobs: jobs, currentCompany: company});
                        });
                       
});