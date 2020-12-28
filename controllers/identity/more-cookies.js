module.exports = async (req, res) => {
  // set a temporary test cookie using express headers
  const now = +Date.now();
  res.set('set-cookie', `current_timestamp=${now}; HttpOnly`);

  return res.status(200).json({ success: true, message: 'Cookie sent' });
};
