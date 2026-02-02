const aws = require('@plugins/aws/src');
import { error } from '@functions';
import { Identity } from '@models';

export default async (req, res) => {
  if (!req.user?.me) {
    throw error(404, 'Missing required params');
  }

  const identity = await Identity.findById(req.user.me);
  if (!identity) {
    throw error(404, 'Account not found');
  }

  if (!identity.profile) {
    throw error(400, 'No profile profile to remove');
  }

  // Remove profile from S3/DigitalOcean
  await aws.remove(identity.profile);

  await identity.updateOne({ $unset: { profile: 1 } });

  return res.status(200).json({ message: 'Profile profile removed' });
};
