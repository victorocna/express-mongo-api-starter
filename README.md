# Express Mongo API starter

Starter for Node Express API projects with Mongo database packed with features like
pagination, authentication, powerful middlewares and many more.

## Documentation and wiki

Refer to the `examples` folder for code examples regarding controllers, models, routes and seeds for "to do" items.

## Quick start

Install dependencies

```bash
npm ci
```

Copy the example environment variables

```bash
cp .env.example .env
```

Optional: Add seeds to your Mongo database

```bash
npm run seed
```

Start the local server

```bash
npm run dev
```

## Features

Important features are listed below

### Soft delete

You can use the automatic soft delete feature for any collection in the MongoDB database.

This feature will backup the entire deleted document and prevent it from being permanently deleted.

### Authentication

JSON web tokens (JWT) and HTTP-only cookies are used to facilitate authentication.

### Plugins and integrations

You can use the common integrations from the `plugins` folder: AWS, Netopia, Postmark and Smartbill.

Each common integration has an extensive documentation, code samples and step-by-step instructions.

### Loading and error states

You can append these query params to any route in this API:

- use `&test=loading&wait=5000` to delay any request with 5 seconds
- use `&test=error` to trigger a failed request

Customize the loading time with the `wait` query param which takes the number of miliseconds you want to wait.

This feature is available only for dev environments.

### Recaptcha

You should use the Recaptcha middleware on any public route.
Moreover, you should skip Recaptcha middleware and validation on any private route.

By default Recaptcha will not be enabled when the request has no origin (it is sent through an API).

### Postman collection

You can use the Postman collection from the `postman` folder to explore the API and its routes.

## Further reading

- [https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
- [https://hasura.io/blog/best-practices-of-using-jwt-with-graphql](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql)
