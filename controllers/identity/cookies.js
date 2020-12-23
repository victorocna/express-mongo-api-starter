module.exports = async (req, res) => {
  // set a temporary test cookie
  res.cookie('current_timestamp', +Date.now());

  return res.status(200).json({ success: true, message: 'Cookie sent' });
};
