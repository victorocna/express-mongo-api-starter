# How to return data from the API

Every response from the API is returned as a **JSON** response.

This template uses the following logic to return data:

- for every error the `name` and `message` keys are returned
- for every mutation the `data` and `message` keys are returned
- for every GET many items the `pages` and `pageParams` keys are returned
- for every GET one item the payload is returned without any special keys

## Examples

Error response

```json
{
  "name": "Error",
  "message": "Unauthorized TokenExpiredError"
}
```

Success response for mutations

```json
{
  "message": "Item created successfully",
  "data": {
    "_id": "63a5d7576c252816c1810ea3",
    "name": "My Item 1",
  }
}
```

Success response for GET many items

```json
{
  "pages": [
    {
      "_id": "63a5d7576c252816c1810ea3",
      "name": "My Item 1",
    }
  ],
  "pageParams": {
    "count": 1,
    "hasNext": false,
    "page": 1,
    "perPage": 30
  },
}
```

Success response for GET one item

```json
{
  "_id": "63a5d7576c252816c1810ea3",
  "name": "My Item 1",
}
```

Using this structure to return data will make sure the data is consumed in a simple and correct way.
