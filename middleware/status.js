/* eslint-disable no-undef */
import { coffee, error } from '../functions';

/**
 * Middleware for testing loading states
 */
export const loading = async (req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    return next();
  }

  const { test, wait = 5000 } = req.query;
  if (test === 'loading') {
    await coffee(wait);
  }

  return next();
};

/**
 * Middleware for testing error states
 */
const _error = (req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    return next();
  }

  const { test } = req.query;
  if (test === 'error') {
    throw error(429, 'Will always trigger an error');
  }

  return next();
};

export { _error as error };
