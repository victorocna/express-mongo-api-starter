import { createStore } from 'redux';

// Action Creators
const setUser = (user) => ({
  type: 'SET',
  payload: user,
});

// Reducer
const userReducer = (state = null, action) => {
  switch (action?.type) {
    case 'SET':
      return action?.payload;
    default:
      return state;
  }
};

// Store
const userStore = createStore(userReducer);

export { userStore, setUser };
