/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *                                                      *
 *  Document Description: scrape data from remixjobs    *
 *                                                      *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * */


const cheerio = require('cheerio');
const request = require('request');
const async = require('async');
const Jobs = require('./models/jobs');
/*
 * Parse html and return an object
 */
module.exports = function(url) {
    request(url, function(error, response, html) {
            if (!error) {
                const $ = cheerio.load(html);
                $('.job-infos').each(function(i, element) {
                        var job;
                        var test = $(this);
                        async.series([
                             function(callback) {
                                           job = new Jobs({
                                                          'title': test.find('.job-title').find('.job-link').text(),
                                                          'company': test.find('.job-details').find('.job-details-left').find('.company').text(),
                                                          'localization': test.find('.job-details').find('.job-details-left').find('.workplace').text(),
                                                          'category': (test.find('.job-title').find('.job-link').attr('href').split('/'))[2],
                                                          'contract': test.find('.contract.clearfix').text().replace(/^\s+|\s+$/g, ''),
                                                          'date': test.find('.job-details').find('.job-details-right').text()
                                                          });
                                           test.find('.job-tags').find('.tag').each(function(i, element) {
                                                    var tagThis = $(this);
                                                    job.tags.push(tagThis.text().replace(/^\s+|\s+/g, ''));
                                           });
                                           callback();
                                     
                               },
                               function(callback) {
                                           var disUrl = "https://remixjobs.com" + test.find('.job-title').find('.job-link').attr('href');
                                           request(disUrl, function(error, response, html1) {
                                                   if (!error) {
                                                       const $$ = cheerio.load(html1);
                                                       job.description = $$('.job-description').text();
                                                       callback();
                                                   } else {
                                                        console.log("Get Discription Failed!");
                                                        callback();
                                                   }
                                           });
                               
                        }],
                        function(err) {
                                if (err) console.log("scrape Error");
                                else {
                                    job.save(function(err) {
                                        if (err) {
                                            console.log('Database err saving: ' + err);
                                        } else {
                                            console.log('Database saving is successful!');
                                        }
                                    });
                                }
                        });
                    });
                
            } else {
                console.log("network is not good now, please try it later");
            }
     });
}