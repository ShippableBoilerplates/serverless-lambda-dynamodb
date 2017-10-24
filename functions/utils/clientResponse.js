'use strict'
exports.clientResponse = (statusCode, response) => {
    return {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        statusCode: statusCode,
        body: JSON.stringify(response)
    }
}
