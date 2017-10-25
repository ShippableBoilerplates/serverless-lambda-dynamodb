<h1 align='center'>Serverless API Example for Client-Side SPAs</h1>

[![license](https://img.shields.io/github/license/ShippableBoilerplates/react-spa-clientside-cdn.svg?style=flat-square)](https://img.shields.io/github/license/ShippableBoilerplates/serverless-lambda-dynamodb)
[![Style](https://img.shields.io/badge/code%20style-standard%2F4-ff69b4.svg?style=flat-square)]()

## Introduction

This is a serverless back-end example, it uses Serverless Framework as a deployment medium. It powers the Chuck Norris jokes that are used in the client-side boilerplates in this organization, namely: [react-spa-clientside] and [react-spa-clientside-cdn].

**This repository is not intended to be a boilerplate because it has some manual steps involved, so it's just an example as of now.**

## The Stack

- AWS Lambda (NodeJS 6.10).
- AWS ApiGateway for handling proxying, api keys, path mapping.
- AWS DynamoDB for storing Chuck Norris jokes.
- AWS CloudFront for using custom domains with ApiGateway.
- AWS Route53 for routing the domain to Cloudfront.


<!-- Links -->
[react-spa-clientside]: https://github.com/ShippableBoilerplates/react-spa-clientside
[react-spa-clientside-cdn]: https://github.com/ShippableBoilerplates/react-spa-clientside-cdn