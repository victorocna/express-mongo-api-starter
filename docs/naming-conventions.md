# Naming conventions

## Files and folders

- `constants` any constant variables: months, countries, cities, etc.
- `controllers` any CRUD Express operations: create order, list orders, etc.
- `db` any initial database data for project collections, grouped by user roles: visitor, client, admin, etc.
- `docs` any project documentation
- `functions` any pure function that abstract a small part of the project
- `middleware` any Express middleware: user exists, recaptcha checks, etc.
- `models` any project model: identities, orders, reviews, etc.
- `plugins` common custom plugins and integrations: AWS, Netopia, Postmark, Smartbill, etc.
- `postman` the Postman collection for the project
- `routes` any Express route and its controller
- `schemas` any validation schema for models
- `scripts` any scripts that update database collections
- `tests` any project tests
- `views` any templating language views
- `site.config.js` the project configuration

## Keywords

Keywords that match CRUD operations: list, view, create, update, remove.

- `list-todos` refers to reading more than one (many) todos
- `view-todo` refers to reading a particular (one) todo
- `create-todo` refers to creating a new todo
- `update-todo` refers to updating an existing todo
- `remove-todo` refers to deleting an existing todo
