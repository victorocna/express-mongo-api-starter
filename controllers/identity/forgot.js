import { error, randomHash } from '@functions';
import { Identity, Reset } from '@models';
import { sendEmail } from '@plugins/postmark/src';

export default async (req, res) => {
  const { email } = req.body;
  if (!email) {
    throw error(400, 'Missing required params');
  }

  const identity = await Identity.findOne({ email }).select('_id');
  if (!identity) {
    throw error(404, 'Account does not exist');
  }

  const hash = randomHash();
  await Reset.deleteMany({ identity });
  await Reset.create({ hash, identity });

  const resetUrl = `${'http://localhost:3000'}/reset/${hash}`;
  await sendEmail({
    type: 'contact',
    to: email,
    subject: 'Password Reset Request',
    message: `You requested a password reset. Click <a href="${resetUrl}">here</a> to reset your password.<br>If you did not request this, please ignore this email.`,
  });

  return res.status(200).json({ success: true });
};
