module.exports = async (req, res) => {
  // set a temporary test cookie
  const oneDay = 24 * 3600 * 1000;
  const options = {
    maxAge: oneDay,
    httpOnly: true,
    signed: true,
  };

  const isProduction = process.env.NODE_ENV === 'production';
  if (isProduction) {
    options.sameSite = 'none';
    options.secure = true;
  }
  res.cookie('current_timestamp', +Date.now(), options);

  return res.status(200).json({ success: true, message: 'Cookie sent' });
};
