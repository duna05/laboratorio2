
// Load the SDK for JavaScript
var AWS = require('aws-sdk');

AWS.config.loadFromPath('./config.json');
// Set the Region 
//AWS.config.update({ region: 'us-east-1' });
// Create S3 service object
var ep = new AWS.Endpoint('https://dev.hcpi.gcba.gob.ar');
var s3 = new AWS.S3({ endpoint: ep });


// Call S3 to list the buckets
s3.listBuckets(function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data.Buckets);
    }
});