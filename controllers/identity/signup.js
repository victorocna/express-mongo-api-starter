import { error } from '@functions';
import { Confirm, Identity } from '@models';
import { sendEmail } from '@plugins/postmark/src';
import { Types } from 'mongoose';
const crypto = require('crypto');

export default async (req, res) => {
  const { email, name } = req.body;

  const existingUser = await Identity.findOne({ email: email.toLowerCase() });
  if (existingUser) {
    throw error(409, 'An account with this email address already exists.');
  }

  const wantConfirmed = req.body.confirmed === true;

  const payload = {
    ...req.body,
    name,
    email: email.toLowerCase(),
    __t: 'admin',
    active: true,
    confirmed: wantConfirmed,
    confirmedAt: wantConfirmed ? new Date() : undefined,
  };

  const newUser = await Identity.create(payload);
  if (!newUser) {
    throw error(400, 'Registration failed at user creation.');
  }

  if (!wantConfirmed) {
    const hash = crypto.createHash('sha256').update(newUser._id.toString()).digest('hex');
    const link = `${'http://localhost:3000'}/confirm/${hash}`;

    await sendEmail({
      type: 'contact',
      to: email,
      subject: 'Account Confirmation',
      message: `Confirm your account to activate it. Click <a href="${link}">here</a> to confirm your account.<br>If you did not signup, please ignore this email.`,
    });

    await Confirm.create({
      hash,
      identity: new Types.ObjectId(newUser._id),
      expirationDate: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });
  }

  return res.status(201).json({ message: 'Account created successfully' });
};
