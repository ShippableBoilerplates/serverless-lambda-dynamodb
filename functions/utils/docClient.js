const AWS = require('aws-sdk')

exports.docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2',
    apiVersion: '2012-08-10'
})
