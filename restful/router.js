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
                                   if (err) res.sendFile(__dirname + '/views' + '/error.html');
                                   else res.render('index', { jobs: jobs });
                        });
});

/*
 * Get: Create a new job
 */
module.exports = router.get('/creation', function(req, res, next) {
                            res.render('create');
});

/*
 * Post: Create a new job
 */
module.exports = router.post('/creation', function(req, res, next) {
                             const Jobs = require('./models/jobs');
                             var category;
                             var contract;
                             var newTags = req.body.job.tags.split(" ");
                             switch(req.body.job.category){
                                case '0': this.category = "Design";break;
                                case '1': this.category = "Développement";break;
                                case '2': this.category = "Marketing";break;
                                case '3': this.category = "Réseau";break;
                                case '4': this.category = "Projets";break;
                                case '5': this.category = "Seo";break;
                                case '6': this.category = "Autres";break;
                             }
                             switch(req.body.job.contract){
                             case '1': this.contract = "CDI";break;
                             case '2': this.contract = "CDD";break;
                             case '3': this.contract = "Freelance";break;
                             case '4': this.contract = "Contrat pro";break;
                             case '5': this.contract = "Stage";break;
                             case '6': this.contract = "Intérim";break;
                             case '7': this.contract = "Alternance";break;
                             }
                             var monthNames = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
                             var date = new Date();
                             // create a new instance of the Job model
                             var job = new Jobs({
                                                title:          req.body.job.title,
                                                company:        req.body.job.company,
                                                localization:   req.body.job.localization,
                                                category:       this.category,
                                                description:    req.body.job.description,
                                                contract:       this.contract,
                                                date:           date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getUTCFullYear()
                                                
                             });
                             
                             for(var i = 0 ; i < newTags.length; i++){
                                    job.tags.push(newTags[i]);
                             }
                             
                             // save the job and check for errors
                             job.save(function(err) {
                                      job.save(function(err) {
                                          if (err) {
                                               console.log('Database err saving: ' + err);
                                          } else {
                                              res.redirect('/jobs');
                                          }
                                      });
                            });
});

/*
 * Get: Show the details of a job
 */
module.exports = router.get('/details/*', function(req, res, next) {
                    const id = req.url.split('/')[2];
                    const Jobs = require('./models/jobs');
                    Jobs.findOne({'_id': id }, function(err, jobs) {
                              if (err) res.sendFile(__dirname + '/views' + '/error.html');
                              else res.render('details', { jobs: jobs });
                    });

});

/*
 * Get: update a job
 */
module.exports = router.get('/updates/*', function(req, res, next) {
                            const id = req.url.split('/')[2];
                            const Jobs = require('./models/jobs');
                            Jobs.findOne({'_id': id }, function(err, jobs) {
                                if (err) res.sendFile(__dirname + '/views' + '/error.html');
                                else res.render('update', { jobs: jobs });
                            });
});

/*
 * Post: update a job
 */
module.exports = router.post('/updates', function(req, res, next) {
                         const Jobs = require('./models/jobs');
                         var category;
                         var contract;
                         var array = [];
                         if(req.body.job.tags){
                             array = req.body.job.tags.split(" ");
                         }
                         switch(req.body.job.category){
                         case '0': this.category = "Design";break;
                         case '1': this.category = "Développement";break;
                         case '2': this.category = "Marketing";break;
                         case '3': this.category = "Réseau";break;
                         case '4': this.category = "Projets";break;
                         case '5': this.category = "Seo";break;
                         case '6': this.category = "Autres";break;
                         }
                         switch(req.body.job.contract){
                         case '1': this.contract = "CDI";break;
                         case '2': this.contract = "CDD";break;
                         case '3': this.contract = "Freelance";break;
                         case '4': this.contract = "Contrat pro";break;
                         case '5': this.contract = "Stage";break;
                         case '6': this.contract = "Intérim";break;
                         case '7': this.contract = "Alternance";break;
                         }
                         // save the job and check for errors
                         Jobs.findByIdAndUpdate(req.body.job._id, {$set: {title:req.body.job.title, company:req.body.job.company, localization:req.body.job.localization, category:this.category, description:req.body.job.description, contract:this.contract, date:req.body.job.date, tags: array}}, function(err) {
                           if (err) {
                                console.log('Database err updating: ' + err);
                           } else {
                                res.redirect('/jobs');
                           }
                 });
});

/*
 * Get: display latest job
 */
module.exports = router.get('/latest', function(req, res, next) {
                    const Jobs = require('./models/jobs');
                    const today = new Date();
                    var monthNames = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];
                    var year = today.getUTCFullYear();
                    var month = monthNames[today.getMonth()];
                    Jobs.find({'date': new RegExp('\\d{1,2}\\s'+ month + '\\s' + year + '$' )}, function(err, jobs) {
                         if (err) res.sendFile(__dirname + '/views' + '/error.html');
                         else res.render('index', { jobs: jobs });
                    });
});