'use strict'
const AWS = require('aws-sdk')
const {randomizer} = require('../utils/randomizer')

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-2', apiVersion: '2012-08-10'
})

exports.handler = (event, context, callback) => {
    const scanParams = {
        TableName: 'ChuckDB',
        ProjectionExpression: 'id'
    }
    docClient.scan(scanParams, (err, scan) => {
        if (err) {
            console.error('Scan error: ', err)
            callback(null, {
                statusCode: 400,
                body: JSON.stringify({ErrorAt: 'Error scanning DB'})
            })
        } else {
            const queryParams = {
                TableName: 'ChuckDB',
                KeyConditionExpression: 'id = :hkey',
                ExpressionAttributeValues: {
                    ':hkey': randomizer(0, 391)
                }
            }
            docClient.query(queryParams, (err, data) => {
                console.log(data.Items)
                if (err || data.Items.length === 0) {
                    console.error('Query error: ', err)
                    callback(null, {
                        statusCode: 400,
                        body: JSON.stringify({
                            ErrorAt: queryParams.ExpressionAttributeValues
                        })
                    })
                } else {
                    callback(null, {
                        statusCode: 200,
                        body: JSON.stringify({
                            joke: data.Items[0]
                        })
                    })
                }
            })
        }
    })
}
