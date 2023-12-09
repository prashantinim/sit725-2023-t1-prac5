

let client = require('../dbConnection');

//client is the endpoint for the database operations 
let collection = client.db("test2").collection('testcollection');

function postSwiss(swiss, callback) {
    collection.insertOne(swiss,callback);
}

//get the collection from mongo.db and give it to callback 
function getAllSwiss(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postSwiss,getAllSwiss}