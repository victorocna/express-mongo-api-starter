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

  if (!identity.picture) {
    throw error(400, 'No profile picture to remove');
  }

  // Remove picture from S3/DigitalOcean
  await aws.remove(identity.picture);

  await identity.updateOne({ $unset: { picture: 1 } });

  return res.status(200).json({ message: 'Profile picture removed' });
};
