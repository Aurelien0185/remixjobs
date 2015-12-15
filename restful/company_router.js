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
                               if (err) res.send({"Info": "There is no company"});
                               else res.json(companies);
                    });
});

/*
 * Get: Return all jobs of a given company
 */
module.exports = router.get('/:company', function(req, res, next) {
                    const company = req.url.split('/')[1];
                    const Jobs = require('./models/jobs');
                    Jobs.find({'company': req.params.company }, function(err, jobs) {
                         if (err) res.send({"Info": "Errors happend for returning all jobs of a given company"});
                         else if(jobs.length === 0) res.send({"Info": "There are no jobs of this company"});
                         else res.json(jobs);
                    });
});