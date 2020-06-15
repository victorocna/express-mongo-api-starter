require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { error } = require('../../functions');
const { Identity } = require('../../models');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw error(400, 'Missing required params');
  }

  const identity = await Identity.findOne({ email }).select('+password');
  if (!identity) {
    throw error(400, 'Your email or password are invalid');
  }

  const { id, key, active, confirmed, __t: role, password: passwordFromDb } = identity;
  if (!active || !confirmed) {
    throw error(400, 'Your account is not active, yet');
  }

  const passwordsMatch = await bcrypt.compare(password, passwordFromDb);
  if (passwordsMatch) {
    // the JWT public data payload
    const payload = { id, key, email, role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '4h',
      algorithm: 'HS256',
    });

    return res.status(200).json({ token });
  }

  throw error(400, 'Your username or password are invalid');
};
