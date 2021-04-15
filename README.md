# Express Mongo API starter

Starter for Node Express API projects with Mongo database

## Quick start

Install dependencies

```bash
npm install
```

Copy the example environment variables

```bash
cp .env.example .env
```

Start the local server

```bash
npm run dev
```

## Features

### Logger

You can use the logger from `pino.js` file to log anything with different logging levels.

By default the logs will not be enabled on production environments. To overwrite this behaviour use the `LOG_EVERYWHERE` environment variable and set its value to `"yes"`.

### Slow and fail

You can append these query params to any route in this API:

- use `&trigger=slow` to delay any request with 5 seconds
- use `&trigger=fail` to trigger a failed request

### Recaptcha

You can use the Recaptcha middleware on any public route.

By default Recaptcha will not be enabled when the request has no origin (it is sent through an API).

### Postman collection

You can use the Postman collection from the `postman` folder to explore the API and its routes.

## Further reading

- [https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
- [https://hasura.io/blog/best-practices-of-using-jwt-with-graphql](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql)
