module.exports = async (req, res) => {
  // set a temporary test cookie
  const options = {
    sameSite: 'none',
  };
  res.cookie('current_timestamp', +Date.now(), options);

  return res.status(200).json({ success: true, message: 'Cookie sent' });
};
