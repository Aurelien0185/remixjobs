/*  * * * * * * * * * * * * * * * * * * *
 *                                      *
 *  Document Description: router        *
 *                                      *
 *  * * * * * * * * * * * * * * * * * * */

var express = require('express');
var app     = express();
var router  = express.Router();


/*
 * Get: Return all jobs
 */
module.exports = router.get('/', function(req, res, next) {
                        const Jobs = require('./models/jobs');
                        Jobs.find(function(err, jobs) {
                                if (err) res.send({"Info": "There are no jobs in the database"});
                                else res.json(jobs);
                        });
});

/*
 * post: Create a new job...
 */
module.exports = router.post('/', function(req, res, next) {
                     const Jobs = require('./models/jobs');
                     //date
                     const today = new Date();
                     var monthNames = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
                     var year = today.getUTCFullYear();
                     var month = monthNames[today.getMonth()];
                     var date = today.getDate();
                     // create a new job
                     if(req.query.job != undefined){
                         jobJson = JSON.parse(req.query.job.toString().replace(/\s+/g, ""));
                         //Job Schema
                         var job = new Jobs({
                                            title:          jobJson.title == undefined ? '':jobJson.title,
                                            company:        jobJson.company == undefined ? '':jobJson.company,
                                            localization:   jobJson.localization == undefined ? '':jobJson.localization,
                                            category:       jobJson.category == undefined ? '':jobJson.category,
                                            description:    jobJson.description == undefined ? '':jobJson.description,
                                            contract:       jobJson.contract == undefined ? '':jobJson.contract,
                                            date:           date + ' '+ month + ' ' + year,
                                            tags:           jobJson.tags == undefined ? []:jobJson.tags
                         });
                         // save the job and check for errors
                         job.save(function(err) {
                                  if (err) res.send({"Info": "Problems happends for creating a new job"});
                                  else res.send({"Info": "Create a new job is done."});
                         });
                     }else{
                        res.send({"Info": "Please send informations, if you want to create a new job"});
                     }
                             
});

/*
 * Get: Return information of a job
 */
module.exports = router.get('/details/:id', function(req, res, next) {
                    const Jobs = require('./models/jobs');
                    Jobs.findOne({'_id': req.params.id }, function(err, jobs) {
                         if (err) res.send({"Info": "There is no information of this job"});
                         else res.json(jobs);
                    });

});

/*
 * Put: Update a job
 */
module.exports = router.put('/:id', function(req, res, next) {
                        const Jobs = require('./models/jobs');
                        const current_id = req.params.id;
                        var title, company, localization, category, description, contract, tags;
                        Jobs.findById({'_id': current_id }, function(err, jobs) {
                             if (err) res.send({"Info": "There is no information for this job"});
                             else{
                                     jobs.title = req.query.title == undefined ? jobs.title  :  req.query.title;
                                     jobs.company = req.query.company == undefined ? jobs.company : req.query.company;
                                     jobs.localization = req.query.localization == undefined ? jobs.localization : req.query.localization;
                                     jobs.category = req.query.category == undefined ? jobs.category : req.query.category;
                                     jobs.description = req.query.description == undefined ? jobs.description : req.query.description;
                                     jobs.contract = req.query.contract == undefined ? jobs.contract : req.query.contract;
                                     jobs.tags = req.query.tags == undefined ? jobs.tags : req.query.tags;
                                     //update the new job
                                     jobs.save(function(err, newJobs) {
                                            if (err) res.send({"Info": "Problems happends for updating the job"});
                                            else res.send(jobs);
                                     });
                                 
                             }
                       });
});

/*
 * Get: Return all jobs of the current day..
 */
module.exports = router.get('/latest', function(req, res, next) {
                    const Jobs = require('./models/jobs');
                    Jobs.find({'date': new RegExp('\\d{1,2}\\sheure\\w{0,1}$')}, function(err, jobs) {
                        if (err) res.send({"Info": "There is no jobs of the current day"});
                        else res.json(jobs);
                    });
});