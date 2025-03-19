const todoFilter = (query, user) => {
  const { only, search } = query;
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
  // Filter by name
  if (search && search.length >= 3) {
    filter.name = { $regex: search, $options: 'i' };
  }

  return filter;
};

export default todoFilter;
