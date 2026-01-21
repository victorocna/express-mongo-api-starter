import { error } from '@functions';
import { Identity } from '@models';

export default async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw error(400, 'Missing required params');
  }

  const existing = await Identity.findOne({ email }).select('_id');
  if (existing) {
    throw error(409, 'Account already exists');
  }

  const identity = await Identity.create({
    name,
    email,
    password,
    role: "admin",
    active: true,
    confirmed: true,
    confirmedAt: Date.now(),
  });

  return res.status(201).json({ id: identity.id, message: 'Account created' });
};
