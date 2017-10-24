'use strict'
const {randomizer} = require('../utils/randomizer')
const {clientResponse} = require('../utils/clientResponse')
const {docClient} = require('../utils/docClient')

exports.handler = (event, context, callback) => {
    const scanParams = {
        TableName: 'ChuckDB',
        ProjectionExpression: 'id'
    }
    docClient.scan(scanParams, (err, scan) => {
        if (err) {
            console.error('Scan error: ', err)
            callback(null, clientResponse(400, {
                error: 'Error scanning DB.'
            }))
        } else {
            const queryParams = {
                TableName: 'ChuckDB',
                KeyConditionExpression: 'id = :hkey',
                ExpressionAttributeValues: {
                    ':hkey': randomizer(0, scan.Count)
                }
            }
            docClient.query(queryParams, (err, data) => {
                if (err || data.Items.length === 0) {
                    console.error('Query error: ', err)
                    callback(null, clientResponse(400, {
                        error: 'Error retrieving item.'
                    }))
                } else {
                    console.info('Sending data: ', data.Items[0])
                    callback(null, clientResponse(200, {
                        joke: data.Items[0]
                    }))
                }
            })
        }
    })
}
