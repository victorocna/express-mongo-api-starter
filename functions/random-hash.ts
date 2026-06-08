import { randomBytes } from 'crypto';

const randomHash = (): string => {
  return randomBytes(24).toString('hex');
};

export default randomHash;
