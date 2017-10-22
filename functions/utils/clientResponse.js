'use strict'
exports.clientResponse = (statusCode, response) => {
    return {
        statusCode: statusCode,
        body: JSON.stringify(response)
    }
}
