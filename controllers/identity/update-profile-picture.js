const aws = require('@plugins/aws/src');
import { error } from '@functions';
import { Identity } from '@models';

export default async (req, res) => {
  if (!req.user?.me) {
    throw error(404, 'Missing required params');
  }

  if (!req.files?.profile) {
    throw error(400, 'No profile file uploaded');
  }
  console.log("In upload---->")
  const { profile } = req.files;
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  if (!allowedTypes.includes(profile.mimetype)) {
    throw error(400, 'Invalid file type. Only images are allowed');
  }

  const identity = await Identity.findById(req.user.me);
  if (!identity) {
    throw error(404, 'Account not found');
  }
  console.log(identity)
  // Delete old profile if exists
  if (identity.profile) {
    await aws.remove(identity.profile);
  }

  // Upload new profile
  const key = aws.createKey({ name: profile.name });
  await aws.upload(key, profile.data, { public: true });
  const url = aws.getPublicUrl(key);

  await identity.updateOne({ profile: url });

  return res.status(200).json({ data: { profile: url }, message: 'Profile profile updated' });
};
