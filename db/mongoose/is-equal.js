import { Types } from 'mongoose';

const isEqual = (id1, id2) => {
  try {
    // Handle cases where either ID is null or undefined
    if (!id1 || !id2) {
      return false;
    }

    id1 = new Types.ObjectId(id1);
    id2 = new Types.ObjectId(id2);

    return id1.equals(id2);
  } catch {
    return false;
  }
};

export default isEqual;
