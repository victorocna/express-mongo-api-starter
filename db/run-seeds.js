import identities from './seeds/001_identities';

const runSeeds = async () => {
  // Add all collection seeds below
  await identities.seed();
};

export default runSeeds;
