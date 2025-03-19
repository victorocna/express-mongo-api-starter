# How to filter query data

This tutorial explains how to implement filtering logic in backend queries, making it easier to retrieve data based on specific criteria like name, role, etc.

## Guidelines

How to fetch data based on search params:

1. Create a function to apply filters based on incoming request parameters.
2. Make sure your filter functions handle edge cases (e.g., minimum search term length).
3. Use the filtered query to retrieve data from the database and paginate the results if needed.

## Examples

Basic filter file:

`filters/todo-filter.js`

```js
const todoFilter = (query, user) => {
  const { search, type } = query;
  const { me } = user;

  // Filter by identity
  const filter = { 
    'identity._id': me,
  };
  // Filter by status
  if (only === 'completed') {
    filter.done = true;
  }
  if (only === 'pending') {
    filter.done = false;
  }
  // Minimum 3 characters for searching by name
  if (search && search?.length >= 3) {
    filter.name = { $regex: search, $options: 'i' }; // Case-insensitive search
  }

  return filter;
};

export default todoFilter;
```

Applying the filter in the controller:

`controllers/todo/list.js`

```js
const { todoFilter } = require('@filters');
const { error } = require('@functions');
const { Todo } = require('@models');

export default async (req, res) => {
  const filter = todoFilter(req.query, req.user);
  const documents = await Todo.find(filter).paginate(req.query);

  return res.status(200).json(documents);
};
```

## Diacritic insensitive filters

To implement diacritic-insensitive filtering, use the existing `diacriticInsensitive` middleware to modify the search query, ignoring special characters like accents:

`routes/todo.js`

```js
const { Router } = require('express');
const { Todo } = require('@controllers');
const { diacriticInsensitive } = require('@middleware');

const router = Router();
export default router;

router.get('/admin/todos', diacriticInsensitive(['search']), Todo.list);
```

In this example:

- The diacriticInsensitive middleware takes an array of filter names (like `'search'`) and converts the search string to a diacritic-insensitive regex.
- This allows the system to treat characters like `ș`, `ă`, or `ț` as their base forms (`s`, `a`, `t`), making the search more forgiving and user-friendly.
