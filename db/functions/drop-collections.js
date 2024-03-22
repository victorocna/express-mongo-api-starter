/* eslint-disable no-console */
import mongoose from 'mongoose';

const dropCollections = async () => {
  try {
    const connection = mongoose.connection;
    const collections = await connection.db.listCollections().toArray();

    for (let collection of collections) {
      console.log(`Dropping ${collection.name} collection...`);
      await connection.db.dropCollection(collection.name);
      console.log('✓');
    }
  } catch (err) {
    console.error(err);
    throw new Error('Error! Cannot clean Mongo database');
  }
};

export default dropCollections;
