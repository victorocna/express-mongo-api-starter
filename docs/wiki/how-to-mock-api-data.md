# How to mock API data

This short tutorial will explain how to mock API data for your React app when you don't have a real API ready.

## Guidelines

Let's assume you are a React developer and want to build an user interface. But oh no, the API is not ready yet. Here's what you should do:

1. add hard-coded data straight in the API using a new API route
2. code your user interface using this hard-coded data
3. replace the hard-coded data when the API is ready and retest the user interface

## Examples

Read one to do item:

```js
/* router.js */
/* add this code before router.all */
router.get('/admin/todos/:id', (req, res) => {
  return res.status(200).json({
    _id: '15dfa12b-bb94-4a3a-92e3-682f9bb49360',
    name: 'Make a to do list',
    checked: true,
  });
});
```

Then you can code your React user interface like before.
After the API is ready you can just replace the hard-coded data.

Read many to do items:

```js
/* router.js */
/* add this code before router.all */
router.get('/admin/todos', (req, res) => {
  return res.status(200).json({
    pageParams: {
      count: 1,
      hasNext: false,
      page: 1,
      perPage: 30,
    },
    pages: [
      {
        _id: '15dfa12b-bb94-4a3a-92e3-682f9bb49360',
        name: 'Make a to do list',
        checked: true,
      },
    ],
  });
});
```
