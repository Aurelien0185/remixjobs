/*  * * * * * * * * * * * * * * * * * * *
 *                                      *
 *  Document Description: define model  *
 *                                      *
 *  * * * * * * * * * * * * * * * * * * */
"use strict";
const mongoose = require('mongoose');

/*
 * open a connection to the "test" database
 * on our locally running instance of MongoDB
 */
mongoose.connect('mongodb://localhost:27017/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongodb connection error:\n'));
db.once('open', function (callback){
        console.error.bind(console, 'Mongodb connection is done!')
});

// define the schema
const Schema = mongoose.Schema;
// there isn't specific key/id like the relational database

let JobSchema = new Schema ({
                        title:          String,
                        company:        String,
                        localization:   String,
                        category:       String,
                        description:    String,
                        contract:       String,
                        date:           String,
                        tags:          [String]
}, { versionKey: false });
// the .model() function makes a copy of schema
module.exports = mongoose.model('Jobs', JobSchema);