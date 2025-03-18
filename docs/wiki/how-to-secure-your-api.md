# How to secure your API

Securing your API is a tricky business. Follow these guidelines for every new collection added to your API.

## Definitions

- query: any request that reads data from the database, usually GET requests
- mutation: any request that writes data in the database; usually POST, PATCH, PUT, DELETE requests

## Guidelines

- prevent unwanted requests by implementing the `recaptcha` middleware for every mutation
- prevent denial-of-service attacks by implementing the `slowdown` middleware for every request
- prevent poorly formatted or unwanted data by validating and sanitizing every mutation
- prevent unwanted access to data by implementing the `authenticate` middleware for every private request
